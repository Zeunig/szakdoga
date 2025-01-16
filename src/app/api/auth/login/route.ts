import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const bcrypt = require('bcrypt');



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
    if (
            typeof(username) === undefined ||
            typeof(password) === undefined
    ) {
        let resp = NextResponse.json({"success":false, "message": `Missing fields`}, {"status": 401});
        return resp;
    }
    const prisma = new PrismaClient();
    const db_result = await prisma.user.findFirst({
        where: {
            "email": {
                equals: username
            }
        }
    });
    if (db_result === null) {
        let resp = NextResponse.json({"success":false, "message": `Invalid e-mail or password`}, {"status": 400});
        return resp;
    }
    var a = await bcrypt.compare(password, db_result.password);
    if (a) {
        let resp = NextResponse.json({"success":true}, {"status": 200});
        // TODO: sessions
        return resp;
    }else {
        let resp = NextResponse.json({"success":false, "message": `Invalid e-mail or password`}, {"status": 400});
        return resp;
    }
    
}