"use server";

import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

// get car details by id and make it json-serializable
async function hawkt(id: number) {
    const prisma = new PrismaClient({});
    let query = await prisma.$queryRaw(Prisma.sql`
        SELECT szakdoga.car.*, szakdoga.user.name AS seller_name FROM szakdoga.car
        JOIN szakdoga.user ON szakdoga.car.seller_id=szakdoga.user.id
        WHERE szakdoga.car.id = ${id}`);
    query[0]["id"] = Number(query[0]["id"]);
    query[0]["features"] = Number(query[0]["features"]);
    console.log(query);
    return query;
}

export async function GET(req: NextRequest, context: {params: {id: number}}) { // ennél nagyobb retardáltságot rég nem írtam
    const router = req.nextUrl.searchParams.get("id");
    let hawk = await hawkt(context.params.id as unknown as number); 
    let resp = NextResponse.json(hawk, {"status": 200});
    return resp;
}