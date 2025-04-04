import { authentication } from "@/lib/auth";
import { ICarListing } from "@/lib/car";
import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export async function POST(req: NextRequest) {
    let auth_cookie = req.cookies.get('auth')?.value;
    let include_unlisted_cars = (req.nextUrl.searchParams.get("include_unlisted_cars") as string) == "true" ? true : false;
    if (!auth_cookie) {
        return NextResponse.json({"success": false, "error": "Nem vagy bejelentkezve!"}, {"status": 401});
    }
    let auth = await authentication(auth_cookie);
    console.log(auth);
    if (auth["success"] == true) {
        try {
            var json = await req.json();
            let new_email = json["new_email"];
            if(!validateEmail(new_email)) {
                return NextResponse.json({"success": false, "error": "Rossz e-mail"}, {status: 400});
            }
            const prisma = new PrismaClient();
            let change = await prisma.user.update({
                where: {
                    id: auth["payload"]["id"] as unknown as number
                },
                data: {
                    email: new_email
                }
            });
            console.log(change);
            return NextResponse.json({"success": true});
        }catch {
            return NextResponse.json({"success": false, "error": "Rossz adat"}, {status: 400});
        }
    }else {
        return NextResponse.json({"success": false, "error": "Nem vagy bejelentkezve!"}, {"status": 401});
    }
}
