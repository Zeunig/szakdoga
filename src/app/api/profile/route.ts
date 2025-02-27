import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    let user_id = parseInt(req.nextUrl.searchParams.get("user_id") as string);
    console.log(typeof(user_id));
    if(typeof(user_id) !== typeof(1)) {
        return NextResponse.json({"success": false, "error": "Érvénytelen ID"}, {"status": 400});

    }
    const prisma = new PrismaClient();
    let query = await prisma.user.findFirst({
        where: {
            id: user_id
        },
        include: {
            password: false,
            permissions: false,
            phone_number: false,
            email: false,
            car: {
                include: {
                    features: false
                }
            }
        }
    });
    console.log(query);
    return NextResponse.json({"success": true, "data": query}, {"status": 200});
}