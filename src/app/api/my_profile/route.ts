import { authentication } from "@/lib/auth";
import { ICarListing } from "@/lib/car";
import { get_my_profile } from "@/lib/profile";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
    let auth_cookie = req.cookies.get('auth')?.value;
    let include_unlisted_cars = (req.nextUrl.searchParams.get("include_unlisted_cars") as string) == "true" ? true : false;
    if (!auth_cookie) {
        return NextResponse.json({"success": false, "error": "Nem vagy bejelentkezve!"}, {"status": 401});
    }
    let auth = await authentication(auth_cookie);
    console.log(auth);
    if (auth["success"] == true) {
        const query = await get_my_profile((auth["payload"]["id"] as unknown as number), include_unlisted_cars);
        console.log(query);
        return NextResponse.json({"success": true, "data": query}, {"status": 200});
    }else {
        return NextResponse.json({"success": false, "error": "Nem vagy bejelentkezve!"}, {"status": 401});
    }
    
}