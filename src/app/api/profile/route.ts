import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    let user_id = parseInt(req.nextUrl.searchParams.get("user_id") as string);
    console.log(typeof(user_id));
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
                    features: false // KURVA ANYÁDAT FASZSZOPÓ KURVA HIBÁK XDDDDDDDDDDDDDDDD
                }
            }
        }
    });
    console.log(query);
    return NextResponse.json(query, {"status": 200});
}