import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const bcrypt = require('bcrypt');
const jose = require('jose')
const { createSecretKey } = require('crypto');
export const secretKey = createSecretKey(process.env.JWT_SECRET, 'utf-8');
const alg = 'HS256'
export async function POST(req: Request) {
    // validating the request
    try {
        var body = await req.json();
    }catch(e) {
        let resp = NextResponse.json({"success":false, "message": `Hibás adatok`}, {"status": 400});
        return resp;
    }
    let username = body["username"];
    let password = body["password"];
    if (
            typeof(username) === undefined ||
            typeof(password) === undefined
    ) {
        let resp = NextResponse.json({"success":false, "message": `Hiányzó e-mail/jelszó`}, {"status": 400});
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
        let resp = NextResponse.json({"success":false, "message": `Érvénytelen e-mail és/vagy jelszó`}, {"status": 400});
        return resp;
    }
    var a = await bcrypt.compare(password, db_result.password);
    if (a) {
        const token = await new jose.SignJWT(
            {
                "name": db_result.name,
                "id": db_result.id,
            }
        ).setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer('urn:zeunig:issuer')
        .setAudience('urn:zeunig:audience')
        .setExpirationTime('7d')
        .sign(secretKey);
        let resp = NextResponse.json({"success":true}, {"status": 200});
        resp.cookies.set("auth",token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            path: "/"
        });
        // TODO: refresh tokens
        return resp;
    }else {
        let resp = NextResponse.json({"success":false, "message": `Érvénytelen e-mail és/vagy jelszó`}, {"status": 400});
        return resp;
    }
    
}