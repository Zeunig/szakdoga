import { authentication } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

declare global {
    interface BigInt {
        toJSON(): Number;
    }
}

BigInt.prototype.toJSON = function () { return Number(this) }

export async function GET(req: NextRequest) {
    let auth_cookie = req.cookies.get('auth')?.value;
    if (!auth_cookie) {
        return NextResponse.json({"error": "Unauthorized"}, {"status": 401});
    }
    let auth = await authentication(auth_cookie);
    console.log(auth);
    if (auth["success"] == true) {
        const prisma = new PrismaClient();
        let user_id = auth["payload"]["id"] as unknown as number;
        console.log(user_id);
        let query = await prisma.user.findMany({
            where: {
                id: {
                    equals: user_id
                }
            },
            include: {
                password: false,
                car: {
                    include: {
                        features: false
                    }
                },
                favorites: true
            }
        });
        console.log(query);
        return NextResponse.json(query, {"status": 200});
    }else {
        return NextResponse.json({"error": "Unauthorized"}, {"status": 401});
    }
    
}