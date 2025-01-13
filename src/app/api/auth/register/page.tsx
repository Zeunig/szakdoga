import { NextApiRequest, NextApiResponse } from "next";
import { useSearchParams } from "next/navigation";
import axios from 'axios';

export default function Page(req: NextApiRequest, res: NextApiResponse) {
    // validating the request
    if (req.method !== "POST") {
        return res.status(405).send({"success":false, "message": `Expected POST request, got ${req.method} instead`});
    }
    try {
        var body = JSON.parse(req.body);
    }catch(e) {
        return res.status(401).send({"success":false, "message": `Failed to parse the request body`});
    }
    let username = body["username"];
    let password = body["password"];
    let email = body["email"];
    let captcha = body["captcha"];
    if (
        typeof(username) !== undefined &&
        typeof(password) !== undefined &&
        typeof(email) !== undefined &&
        typeof(captcha) !== undefined
    ) {
        return res.status(401).send({"success":false, "message": `Missing fields`});
    }
    // verifying captcha answer
    var hcaptcha_siteverify = new URLSearchParams();
    hcaptcha_siteverify.append("secret","0x0000000000000000000000000000000000000000"); // TODO : replace test key with real key
    hcaptcha_siteverify.append("response",captcha);
    axios.post("https://api.hcaptcha.com/siteverify",hcaptcha_siteverify)
    .then(function (response) {
        if (response.data.success) {
            // captcha was solved, we can append the username into our database
            // TODO
        }
    })
    .catch(function (error) {
        return res.status(500).send({"success":false, "message": `Captcha verification failed`});
    })
}