import { PrismaClient } from "@prisma/client";
import { randomInt } from "crypto";
import { NextRequest, NextResponse } from "next/server";

/*
    JSON

{
    brand: string,
    model: string,
    price: number,
    year: number,
    mileage: number,
    weight: number,
    horsepower: number,
    cc: number,
    fuel_type: string,
    gearbox: string,
    drive_type: string,
    condition: string, || ACCEPTED VALUES : Brand New, Like New, Barely Used, Used, Damaged ,Broken, Missing Parts
    doors: number,
    passengers: number,
    color: string,
    features: number,
    vin: string,
    design: string
}
*/

interface PublishInterface {
    brand: string,
    model: string,
    price: number,
    year: number,
    mileage: number,
    weight: number,
    horsepower: number,
    cc: number,
    fuel_type: string,
    gearbox: string,
    drive_type: string,
    condition: string,
    doors: number,
    passengers: number,
    color: string,
    features: number,
    vin: string,
    design: string,
    images: string[]
};

const CONDITION_ACCEPTED_VALUES = ["Új","Újszerű","Alig használt","Használt","Megviselt","Hibás","Hiányos","Törött"];
const FUEL_TYPE_ACCEPTED_VALUES = ["Benzin","Dízel","Hibrid","Elektromos","Etanol","Biodízel","Gáz"];
const GEARBOX_ACCEPTED_VALUES = ["Manuális","Automata","Szekvenciális","Fokozatmentes automata","Tiptronic","Félautomata"];
const DESIGN_ACCEPTED_VALUES = ["Pickup","Terepjáró","Buggy","Cabrio","Coupe","Egytérű","Ferdehátú","Hot rod","Kisbusz","Kombi","Lépcsőshátú","Mopedautó","Sedan","Sport","Városi terepjáró (crossover)","Egyéb"];

export async function POST(req: NextRequest) {
    let json: PublishInterface = await req.json();
    // validate the data
    if (json.year < 1900) {
        return NextResponse.json({"success":false, "message": "Érvénytelen évjárat"},{"status": 400})
    }
    if (!CONDITION_ACCEPTED_VALUES.includes(json.condition)) {
        return NextResponse.json({"success":false, "message": "Érvénytelen állapot"},{"status": 400})
    }
    if (!FUEL_TYPE_ACCEPTED_VALUES.includes(json.fuel_type)) {
        return NextResponse.json({"success":false, "message": "Érvénytelen üzemanyag-típus"},{"status": 400})
    }
    if (!GEARBOX_ACCEPTED_VALUES.includes(json.gearbox)) {
        return NextResponse.json({"success":false, "message": "Érvénytelen sebességváltó"},{"status": 400})
    }
    if (!DESIGN_ACCEPTED_VALUES.includes(json.design)) {
        return NextResponse.json({"success":false, "message": "Érvénytelen kivitel"},{"status": 400})
    }
    for(var i = 0; i < json.images.length; i++) {
        if(!(/[c-z]{4,5}:\/\/(rubyrose.top|listings-prod.tcimg.net)\//.test(json.images[i]))) {
            return NextResponse.json({"success":false, "message": `Érvénytelen kép URL : ${json.images[i]}`},{"status": 400})
        }
    }
    let create = [];
    for(var i = 0; i < json.images.length; i++) {
        create.push({
            image_url: json.images[i]
        });
    }
    const prisma = new PrismaClient();
    const car = await prisma.car.create({
        data: {
            seller_id: randomInt(17,64),
            featured: 0,
            price: json.price,
            discounted_price: json.price,
            brand: json.brand,
            model: json.model,
            year: json.year,
            mileage: json.mileage,
            weight: json.weight,
            horsepower: json.horsepower,
            cc: json.cc,
            fuel_type: json.fuel_type,
            gearbox: json.gearbox,
            drive_type: json.drive_type,
            condition: json.condition,
            passengers: json.passengers,
            doors: json.doors,
            color: json.color,
            features: json.features,
            vin: json.vin,
            design: json.design,
            car_image_relation: {
                create: create
            }
        },
    });
    console.log(car);
    let resp = NextResponse.json({"success":true}, {"status": 200});
    return resp;
}