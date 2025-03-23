"use server";

import { authentication } from "@/lib/auth";
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
        query["id"] = Number(query["id"]);
        query["features"] = Number(query["features"]);
        query["creation_date"] = query["creation_date"]?.toISOString();
        return query;
    }catch (err) {
        return {"success": false}
    }
    
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

export async function DELETE(req: NextRequest, context: {params: {id: number}}) {
    const { id } = await context.params;
    if(Number.isNaN(Number(id))) {
        return NextResponse.json({"success": false,"error":"Invalid ID"},{status: 400});
    }
    let auth_cookie = req.cookies.get('auth')?.value;
    let include_unlisted_cars = (req.nextUrl.searchParams.get("include_unlisted_cars") as string) == "true" ? true : false;
    if (!auth_cookie) {
        return NextResponse.json({"success": false, "error": "Nem vagy bejelentkezve!"}, {"status": 401});
    }
    let auth = await authentication(auth_cookie);
    if (auth["success"] == true) {
        const prisma = new PrismaClient({});
        var user_query = await prisma.user.findFirst({
            where: {
                id: auth["payload"]["id"] as unknown as number
            },
        });
        if((Number(user_query?.permissions) >>> 0 & 1) == 1) {
            let query = {
                where: {
                    id: Number(id),
                },
                data: {
                    listed: 0
                }
            };
            var deletion = await prisma.car.update(query);
            let resp = NextResponse.json({"success": true}, {"status": 200});
            return resp;
        }else {
            let query = {
                where: {
                    id: Number(id),
                    user: user_query!
                },
                data: {
                    listed: 0
                }
            };
            var deletion = await prisma.car.update(query);
            let resp = NextResponse.json({"success": true}, {"status": 200});
            return resp;
        }
        
    }
    
}

export async function PUT(req: NextRequest, context: {params: {id: number}}) {
    
}