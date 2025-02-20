import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
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
            },
            features: true
        }
    });
    console.log(query);
    return NextResponse.json(query, {"status": 200});
}