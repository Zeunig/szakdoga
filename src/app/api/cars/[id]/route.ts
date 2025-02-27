"use server";

import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// get car details by id and make it json-serializable
export async function get_car_from_db(id: number) {
    const prisma = new PrismaClient({});
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
        console.error(err.stack);
    }
    query["id"] = Number(query["id"]);
    query["features"] = Number(query["features"]);
    query["creation_date"] = query["creation_date"]?.toISOString();
    console.log(query);
    return query;
}

export async function GET(req: NextRequest, context: {params: {id: number}}) {
    const { id } = await context.params;
    if(Number.isNaN(Number(id))) {
        return NextResponse.json({"success": false,"error":"Invalid ID"},{status: 400});
    }
    const router = req.nextUrl.searchParams.get("id");
    let hawk = await get_car_from_db(id as unknown as number); 
    let resp = NextResponse.json({"success": true, "data": hawk}, {"status": 200});
    return resp;
}