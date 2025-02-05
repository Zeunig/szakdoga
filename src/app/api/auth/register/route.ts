import { NextApiRequest, NextApiResponse } from "next";
import { useSearchParams } from "next/navigation";
import { PrismaClient } from '@prisma/client'
import axios from 'axios';
import { NextRequest, NextResponse } from "next/server";
const bcrypt = require('bcrypt');
const saltRounds = 10;

function encrypt_pw(password: string)  {
    bcrypt.hash(password, saltRounds, (err: any,hash: string) => {
        if (err) {
            console.error(`Error happened while encrypting passowrd : ${err}`);
            return undefined;
        }else {
            return hash;
        }
    })
}

export async function POST(req: Request) {
    // validating the request
    try {
        var body = await req.json();
    }catch(e) {
        let resp = NextResponse.json({"success":false, "message": `Failed to parse the request body`}, {"status": 401});
        return resp;
    }
    let username = body["username"];
    let password = body["password"];
    let email = body["email"];
    let captcha = body["captcha"];

    if (
        typeof(username) === undefined ||
        (username as string).length === 0 ||
        typeof(password) === undefined ||
        (password as string).length === 0 ||
        typeof(email) === undefined ||
        (email as string).length === 0 ||
        typeof(captcha) === undefined ||
        (captcha as string).length === 0
    ) {
        let resp = NextResponse.json({"success":false, "message": `Missing fields`}, {"status": 401});
        return resp;
    }
    // verifying captcha answer
    var hcaptcha_siteverify = new URLSearchParams();
    hcaptcha_siteverify.append("secret","0x0000000000000000000000000000000000000000"); // TODO : replace test key with real key
    hcaptcha_siteverify.append("response",captcha);
    let hawk = await axios.post("https://api.hcaptcha.com/siteverify",hcaptcha_siteverify);
    console.log(hawk.data.success);
    if (hawk.data.success || captcha === "hawktuahspitonthatthang") { // TODO : remove hawktuahspitonthatthangr
        // captcha was solved, we can append the username into our database
        var encrypted_password = await bcrypt.hash(password, saltRounds);
        if (typeof(encrypted_password) == "undefined") {
            let resp = NextResponse.json({"success":false}, {"status": 500});
            return resp;
        }
        const prisma = new PrismaClient();
        console.log(encrypted_password);
        const user = prisma.user.create({
            data: {
                name: username,
                phone_number: null,
                email: email,
                password: encrypted_password,
                avatar_url: null,
                join_date: new Date(),
                permissions: 0
            }
        });
        user.catch((err) => {
            console.error(err);
        })
        let resp = NextResponse.json({"success":true}, {"status": 200});
        return resp;
    }
    /*await axios.post("https://api.hcaptcha.com/siteverify",hcaptcha_siteverify)
    .then(async function (response) {
        if (response.data.success || captcha === "hawktuahspitonthatthang") {
            // captcha was solved, we can append the username into our database
            // TODO
            const prisma = new PrismaClient();
            let encrypted_password;
            bcrypt.hash(password, saltRounds, (err: any,hash: any) => {
                if (err) {
                    console.error(`Error happened while encrypting passowrd : ${err}`);
                }else {
                    encrypted_password = hash;
                }
            })
            const user = await prisma.user.create({
                data: {
                    name: username,
                    phone_number: null,
                    email: email,
                    password: encrypted_password,
                    avatar_url: null,
                    join_date: new Date()
                }
            });
            let resp = NextResponse.json({"success":true}, {"status": 200});
            return resp;
        }else {
            let resp = NextResponse.json({"success":false, "message": `Invalid captcha!`}, {"status": 401});
            return resp;
        }
    })
    .catch(function (error) {
        let resp = NextResponse.json({"success":false, "message": `Captcha verification failed, please try again!`}, {"status": 500});
        return resp;
    })*/
    let resp = NextResponse.json({"success":false, "message": `Failed captcha!`}, {"status": 500});
    return resp;
}