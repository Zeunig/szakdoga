import { authentication } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        var body = await req.json();
    }catch(e) {
        let resp = NextResponse.json({"success":false, "message": `Hibás adatok`}, {"status": 400});
        return resp;
    }
    if(typeof(body["reason"]) === undefined || typeof(body["car_id"]) === undefined) {
        let resp = NextResponse.json({"success":false, "message": `Hiányzó adatok`}, {"status": 400});
        return resp;
    }
    const prisma = new PrismaClient();
    let query = await prisma.report.create({
        data: {
            reason: body["reason"],
            car_id: parseInt(body["car_id"]) || 0,
            reporter_ip: req.headers.get("x-forwarded-host") || "ismeretlen"
        }
    });
    let resp = NextResponse.json({"success":true}, {"status": 200});
    return resp;
}


export async function DELETE(req: NextRequest) {
    let auth_cookie = req.cookies.get('auth')?.value;
    if (!auth_cookie) {
        return NextResponse.json({"success": false, "error": "Nem vagy bejelentkezve!"}, {"status": 401});
    }
    let auth = await authentication(auth_cookie);
    console.log(auth);
    if (auth["success"] == true) {
        
        try {
            var body = await req.json();
        }catch(e) {
            let resp = NextResponse.json({"success":false, "message": `Hibás adatok`}, {"status": 400});
            return resp;
        }
        if(typeof(body["reason_id"]) === undefined ) {
            let resp = NextResponse.json({"success":false, "message": `Hiányzó adat`}, {"status": 400});
            return resp;
        }
        const prisma = new PrismaClient();
        let user_query = await prisma.user.findFirst({
            where: {
                id: {
                    equals: auth["payload"]["id"] as unknown as number
                }
            }
        });
        console.log(user_query?.permissions);
        if((Number(user_query?.permissions) >>> 0 & 1) == 1) {
            let query = await prisma.report.update({
                where: {
                    id: parseInt(body["reason_id"]) || 0
                },
                data: {
                    solved: 1
                }
            });
            let resp = NextResponse.json({"success":true}, {"status": 200});
            return resp;
        }else {
            return NextResponse.json({"success": false, "error": "Nincs jogosultságod!"}, {"status": 401});

        }
        
    }else {
        return NextResponse.json({"success": false, "error": "Nem vagy bejelentkezve!"}, {"status": 401});
    }
    
}