import { authentication } from "@/lib/auth";
import { ICarListing } from "@/lib/car";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export interface IExtendedProfile {
    id: number,
    name: string,
    phone_number: number | null,
    email: string,
    avatar_url: string | null,
    join_date: Date,
    permissions: number,
    car: ICarListing[]
}

declare global {
    interface BigInt {
        toJSON(): Number;
    }
}

BigInt.prototype.toJSON = function () { return Number(this) }

export async function get_my_profile(user_id: number) {
    const prisma = new PrismaClient();
    console.log(user_id);
    let query = await prisma.user.findFirst({
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
    return query;
}

export async function GET(req: NextRequest) {
    let auth_cookie = req.cookies.get('auth')?.value;
    if (!auth_cookie) {
        return NextResponse.json({"success": false, "error": "Nem vagy bejelentkezve!"}, {"status": 401});
    }
    let auth = await authentication(auth_cookie);
    console.log(auth);
    if (auth["success"] == true) {
        const query = await get_my_profile((auth["payload"]["id"] as unknown as number));
        console.log(query);
        return NextResponse.json({"success": true, "data": query}, {"status": 200});
    }else {
        return NextResponse.json({"success": false, "error": "Nem vagy bejelentkezve!"}, {"status": 401});
    }
    
}