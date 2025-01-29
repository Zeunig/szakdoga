import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { FEATURES } from "@/lib/search/features";
import { Search } from "@/lib/search/search";
import { split } from "postcss/lib/list";
/*
    Accepted params : 
    - Brand : string (brand) 
    - Model : string (model)
    - Fuel type : string (fueltype)
    - Minimum price : int (pricemin)
    - Maximum price : int (pricemax)
    - Km min: int (kmmin)
    - Km max : int (kmmax)
    - Year min : int (yearmin)
    - Year max : int (yearmax)
    - Weight min : int (weightmin)
    - Weight max : int (weightmax)
    - Min cc : int (ccmin)
    - Max cc : int (ccmax)
    - Min horsepower : int (hpmin)
    - Max horsepower : int (hpmax)
    - Wheels : string[] (wheels) (seperated by ,)
        - Accepted params :
            - FWD
            - RWD
            - AWD
            - 4WD
    - Gearbox : string[] (gearbox) (seperated by ,) (manual | automatic)
    - Passengers : int[] (passengers) (seperated by ,)
    - Amount of doors : int[] (doors) (seperated by ,)
    - Color : string[] (color) (seperated by ,)
        - White, blue, red, silver, yellow, green, purple, brown, pink, orange, grey, black
    - Features : int (features)
    - Status : string[] (status) (seperated by ,)
*/



export async function GET(req: NextRequest) {
    /*console.log(req.nextUrl.searchParams);
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
    return resp;*/
    let split_wheels = (req.nextUrl.searchParams.get("wheels") as string)?.split(",");
    if (req.nextUrl.searchParams.get("passenger") !== null) {
        var passengers = [];
        let split_passengers = (req.nextUrl.searchParams.get("passenger") as string).split(",");
        for(var i = 0; i < split_passengers.length; i++) {
            passengers.push(parseInt(split_passengers[i]));
        }
    }

    if (req.nextUrl.searchParams.get("door") !== null) {
        var doors = [];
        let split_doors = (req.nextUrl.searchParams.get("door") as string).split(",");
        for(var i = 0; i < split_doors.length; i++) {
            doors.push(parseInt(split_doors[i]));
        }
    }
    
    
    const result = await Search(
        {
            brand: (req.nextUrl.searchParams.get("brand") as string),
            model: (req.nextUrl.searchParams.get("model") as string),
            fuel_type: (req.nextUrl.searchParams.get("fueltype") as string)?.split(","),
            price: [
                req.nextUrl.searchParams.get("pricemin") as unknown as number,
                req.nextUrl.searchParams.get("pricemax") as unknown as number
            ],
            km: [
                req.nextUrl.searchParams.get("kmmin") as unknown as number,
                req.nextUrl.searchParams.get("kmmax") as unknown as number
            ],
            features: parseInt(req.nextUrl.searchParams.get("features") as string),
            year: [
                req.nextUrl.searchParams.get("yearmin") as unknown as number,
                req.nextUrl.searchParams.get("yearmax") as unknown as number
            ],
            weight: [
                req.nextUrl.searchParams.get("weightmin") as unknown as number,
                req.nextUrl.searchParams.get("weightmax") as unknown as number
            ],
            hp: [
                req.nextUrl.searchParams.get("hpmin") as unknown as number,
                req.nextUrl.searchParams.get("hpmax") as unknown as number
            ],
            cc: [
                req.nextUrl.searchParams.get("ccmin") as unknown as number,
                req.nextUrl.searchParams.get("ccmax") as unknown as number
            ],
            wheels: split_wheels,
            gearbox: (req.nextUrl.searchParams.get("gearbox") as string)?.split(","),
            passengers: passengers,
            door: doors,
            color: (req.nextUrl.searchParams.get("color") as string)?.split(","),
            status: (req.nextUrl.searchParams.get("status") as string)?.split(",")
        }
    );
    console.log(result);
    let resp = NextResponse.json(result, {"status": 200});
    return resp;
}