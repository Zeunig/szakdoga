import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { FEATURES } from "@/lib/search/features";
/*
    Accepted params : 
    - Brand : string (brand) 
    - Model : string (model)
    - Fuel type : string (fueltype)
    - Minimum price : int (pricemin)
    - Maximum price : int (pricemax)
    - Km min: int (kmmin)
    - Km max : int (kmmax),
    - cc : int (cc),
    - Wheels : int (wheels),
    - Gearbox : string (gearbox) (manual | automatic),
    - Passengers : int (passengers),
    - Amount of doors : int (doors),
    - Color : int (color)
        - White, blue, red, silver, yellow, green, purple, brown, pink, orange, grey, black
    - Features : int (features)
*/

function getFeatures(decimalValue: number) {
    let bitPosition = 0; const features = [];
    while (decimalValue > 0) {
        if (decimalValue & 1) {
            features.push(FEATURES[bitPosition]);
        }
        decimalValue >>= 1;
        bitPosition++;
    }
    return features
}

export async function GET(req: NextRequest) {
    console.log(req.nextUrl.searchParams);
    console.log(req.nextUrl.searchParams.get("brand") as string);
    const prisma = new PrismaClient();
    const features_number: number = req.nextUrl.searchParams.get("features") as unknown as number;
    const features_query = getFeatures(req.nextUrl.searchParams.get("features") as unknown as number || 0);
    console.log(features_query);
    const searchResult = await prisma.car.findMany({where: {
        brand: {
            contains: req.nextUrl.searchParams.get("brand") as string || ""
        },
        model: {
            contains: req.nextUrl.searchParams.get("model") as string || ""
        },
        fuel_type: {
            contains: req.nextUrl.searchParams.get("model") as string || ""
        },
        km: {
            gt: parseInt(req.nextUrl.searchParams.get("kmmin") as string) || 0,
            lt: parseInt(req.nextUrl.searchParams.get("kmmax") as string) || Number.MAX_SAFE_INTEGER,
        },
        discounted_price: {
            gt: parseInt(req.nextUrl.searchParams.get("pricemin") as string) || 0,
            lt: parseInt(req.nextUrl.searchParams.get("pricemax") as string) || Number.MAX_SAFE_INTEGER,
        },
    }});
    console.log(searchResult[0].features & features_number);
    let filteredResult = searchResult.filter((result) => (result.features & features_number) == result.features);
    console.log(filteredResult);
    let resp = NextResponse.json({}, {"status": 400});
    return resp;
}