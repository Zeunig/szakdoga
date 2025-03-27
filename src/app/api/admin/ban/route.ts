import { authentication } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

interface BanRequest {
    user_id: number
}

export async function POST(req: NextRequest) {
    let auth_cookie = req.cookies.get('auth')?.value;
    if (!auth_cookie) {
        return NextResponse.json({"success": false, "error": "Nem vagy bejelentkezve!"}, {"status": 401});
    }
    let auth = await authentication(auth_cookie);
    if (auth["success"] == true) {
        const prisma = new PrismaClient();
        let query = await prisma.user.findFirst({
            where: {
                id: {
                    equals: auth["payload"]["id"] as unknown as number
                }
            },
            include: {
                car: false
            }
        });
        if((Number(query?.permissions) >>> 2 & 1) == 0) {
            let resp = NextResponse.json({"success":false, "error": "Nincs admin jogosultságod"}, {"status": 401});
            return resp;
        }
        let json: BanRequest = await req.json();
        let query_1 = await prisma.user.findFirst({
            where: {
                id: json.user_id
            }
        })
        let new_permissions = Number(query_1?.permissions) | 4;
        let query_2 = await prisma.user.update({
            where: {
                id: json.user_id
            },
            data: {
                permissions: new_permissions
            }
        });
        let resp = NextResponse.json({"success":true}, {"status": 200});
        return resp;
    }else {
        let resp = NextResponse.json({"success":false,"error": "Nem vagy bejelentkezve"}, {"status": 401});
        return resp;
    }
}

export async function DELETE(req: NextRequest) {
    let auth_cookie = req.cookies.get('auth')?.value;
    if (!auth_cookie) {
        return NextResponse.json({"success": false, "error": "Nem vagy bejelentkezve!"}, {"status": 401});
    }
    let auth = await authentication(auth_cookie);
    if (auth["success"] == true) {
        const prisma = new PrismaClient();
        let query = await prisma.user.findFirst({
            where: {
                id: {
                    equals: auth["payload"]["id"] as unknown as number
                }
            },
            include: {
                car: false
            }
        });
        if((Number(query?.permissions) >>> 2 & 1) == 0) {
            let resp = NextResponse.json({"success":false, "error": "Nincs admin jogosultságod"}, {"status": 401});
            return resp;
        }
        let json: BanRequest = await req.json();
        let query_1 = await prisma.user.findFirst({
            where: {
                id: json.user_id
            }
        })
        let new_permissions = Number(query_1?.permissions) ^ 4;
        let query_2 = await prisma.user.update({
            where: {
                id: json.user_id
            },
            data: {
                permissions: new_permissions
            }
        });
        let resp = NextResponse.json({"success":true}, {"status": 200});
        return resp;
    }else {
        let resp = NextResponse.json({"success":false,"error": "Nem vagy bejelentkezve"}, {"status": 401});
        return resp;
    }
}