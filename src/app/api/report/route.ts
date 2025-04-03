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

