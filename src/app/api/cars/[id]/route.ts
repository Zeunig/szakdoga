"use server";

import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// get car details by id and make it json-serializable
async function hawkt(id: number) {
    const prisma = new PrismaClient({});
    /*let query = await prisma.$queryRaw(Prisma.sql`
        SELECT szakdoga.car.*, szakdoga.user.name AS seller_name FROM szakdoga.car
        JOIN szakdoga.user ON szakdoga.car.seller_id=szakdoga.user.id
        WHERE szakdoga.car.id = ${id}`);*/
    console.log(`Szám : ${id}`);
    try {
        var query = await prisma.car.findFirst({
            where: {
                id: {
                    equals: Number(id) 
                }
            },
            include: {
                car_image_relation: true,
                user: {
                    include: {
                        password: false,
                        permissions: false,
                        phone_number: false,
                        email: false,
                        join_date: false
                    }
                }
            }
        });
    }catch (err) {
        console.log(err.stack);
    }
    
    console.log(query);
    query["id"] = Number(query["id"]);
    query["features"] = Number(query["features"]);
    return query;
}

export async function GET(req: NextRequest, context: {params: {id: number}}) { // ennél nagyobb retardáltságot rég nem írtam
    const { id } = await context.params;
    const router = req.nextUrl.searchParams.get("id");
    let hawk = await hawkt(id as unknown as number); 
    let resp = NextResponse.json(hawk, {"status": 200});
    return resp;
}