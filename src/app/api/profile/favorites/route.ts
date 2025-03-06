import { authentication } from "@/lib/auth";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
    let auth_cookie = req.cookies.get('auth')?.value;
    if (!auth_cookie) {
        return NextResponse.json({"success": false, "error": "Nem vagy bejelentkezve!"}, {"status": 401});
    }
    let auth = await authentication(auth_cookie);
    console.log(auth);
    if (auth["success"] == true) {
        let car_id = parseInt(req.nextUrl.searchParams.get("car_id") as string);
        if(Number.isNaN(car_id)) {
            return NextResponse.json({"success": false, "error": "Érvénytelen autó!"}, {"status": 400});
        }
        const prisma = new PrismaClient();
        let user_id = auth["payload"]["id"] as unknown as number;
        const car_count = await prisma.car.count({where: {id: car_id}});
        if(car_count >= 1) {
            await prisma.favorites.create({
                data: {
                    user_id,
                    car_id
                }
            });
            return NextResponse.json({"success": true}, {"status": 200});
        }else {
            return NextResponse.json({"success": false, "error": "Érvénytelen autó!"}, {"status": 400});
        }
        
    }

}

export async function DELETE(req: NextRequest) {
    let auth_cookie = req.cookies.get('auth')?.value;
    if (!auth_cookie) {
        return NextResponse.json({"success": false, "error": "Nem vagy bejelentkezve!"}, {"status": 401});
    }
    let auth = await authentication(auth_cookie);
    console.log(auth);
    if (auth["success"] == true) {
        let car_id = parseInt(req.nextUrl.searchParams.get("car_id") as string);
        if(Number.isNaN(car_id)) {
            return NextResponse.json({"success": false, "error": "Érvénytelen autó!"}, {"status": 400});
        }
        const prisma = new PrismaClient();
        let user_id = auth["payload"]["id"] as unknown as number;
        let deletion = await prisma.favorites.deleteMany({
            where: {
                car_id,
                user_id
            },
        });
        return NextResponse.json({"success": true}, {"status": 200});
        
    }
}