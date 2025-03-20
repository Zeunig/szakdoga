import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { FEATURES } from "@/lib/search/features";
import { Search, SearchAmountOfResults } from "@/lib/search/search";
import { split } from "postcss/lib/list";
/*
    Accepted params : 
    - Brand : string (brand) 
    - Model : string (model)
    - Fuel type : string (fuel_type)
    - Minimum price : int (min_price)
    - Maximum price : int (max_price)
    - Km min: int (min_km)
    - Km max : int (max_km)
    - Year min : int (min_year)
    - Year max : int (max_year)
    - Weight min : int (min_weight)
    - Weight max : int (max_weight)
    - Min cc : int (min_cc)
    - Max cc : int (max_cc)
    - Min horsepower : int (min_hp)
    - Max horsepower : int (max_hp)
    - Wheels : string[] (wheels) (seperated by ,)
        - Accepted params :
            - FWD
            - RWD
            - AWD
            - 4WD
    - Gearbox : string[] (gearbox) (seperated by ,) (manual | automatic)
    - Min passengers: number (min_passengers)
    - Max passengers: number (max_passengers)
    - Min doors: number (min_doors)
    - Max doors: number (max_doors)
    - Color : string[] (color) (seperated by ,)
        - White, blue, red, silver, yellow, green, purple, brown, pink, orange, grey, black
    - Features : int (features)
    - Status : string[] (status) (seperated by ,)
*/



export async function GET(req: NextRequest) {
    /*console.log(req.nextUrl.searchParams);
    console.log(req.nextUrl.searchParams.get("brand") as string);
    const prisma = new PrismaClient();
    const features_number: number = parseInt(req.nextUrl.searchParams.get("features") as string) | 0;
    const features_query = getFeatures(parseInt(req.nextUrl.searchParams.get("features") as string) | 0 || 0);
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
    return resp;*/
    let split_wheels = (req.nextUrl.searchParams.get("wheels") as string)?.split(",");
    let query = {
        brand: (req.nextUrl.searchParams.get("brand") as string),
        model: (req.nextUrl.searchParams.get("model") as string),
        fuel_type: (req.nextUrl.searchParams.get("fuel_type") as string)?.split(","),
        price: [
            parseInt(req.nextUrl.searchParams.get("min_price") as string) | 0,
            parseInt(req.nextUrl.searchParams.get("max_price") as string) | 99999999999
        ],
        km: [
            parseInt(req.nextUrl.searchParams.get("min_km") as string) | 0,
            parseInt(req.nextUrl.searchParams.get("max_km") as string) | 99999999999
        ],
        features: parseInt(req.nextUrl.searchParams.get("features") as string),
        year: [
            parseInt(req.nextUrl.searchParams.get("min_year") as string) | 0,
            parseInt(req.nextUrl.searchParams.get("max_year") as string) | 99999999999
        ],
        weight: [
            parseInt(req.nextUrl.searchParams.get("min_weight") as string) | 0,
            parseInt(req.nextUrl.searchParams.get("max_weight") as string) | 99999999999
        ],
        hp: [
            parseInt(req.nextUrl.searchParams.get("min_hp") as string) | 0,
            parseInt(req.nextUrl.searchParams.get("max_hp") as string) | 99999999999
        ],
        cc: [
            parseInt(req.nextUrl.searchParams.get("min_cc") as string) | 0,
            parseInt(req.nextUrl.searchParams.get("max_cc") as string) | 99999999999
        ],
        wheels: split_wheels,
        gearbox: (req.nextUrl.searchParams.get("gearbox") as string)?.split(","),
        passengers: [
            parseInt(req.nextUrl.searchParams.get("min_passengers") as string) | 0,
            parseInt(req.nextUrl.searchParams.get("max_passengers") as string) | 99999999999
        ],
        door: [
            parseInt(req.nextUrl.searchParams.get("min_doors") as string) | 0,
            parseInt(req.nextUrl.searchParams.get("max_doors") as string) | 99999999999
        ],
        color: (req.nextUrl.searchParams.get("color") as string)?.split(","),
        status: (req.nextUrl.searchParams.get("status") as string)?.split(","),
        limit: parseInt(req.nextUrl.searchParams.get("limit") as string),
        offset: parseInt(req.nextUrl.searchParams.get("offset") as string)
    };
    const result = await Search(
        query
    );
    const count = await SearchAmountOfResults(query);
    let resp = NextResponse.json({"success": true, "data":result, "count": count}, {"status": 200});
    return resp;
}