"use server";
import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

interface IUnsortedCarSelection {
    brand: string,
    model: string,
    count: BigInt
}

export interface IModel {
    model: string,
    count: number
}

export interface ISortedCarSelection {
    brand: string,
    models: IModel[],
    totalCount: number
}

async function sortCarSelection(unsorted: IUnsortedCarSelection[]) {
    let sorted: ISortedCarSelection[] = [];
    var unsorted = unsorted.sort((a,b) => a.brand.toLowerCase() > b.brand.toLowerCase() ? 1 : -1);
    var last_brand = "";
    unsorted.forEach((car) => {
        if(last_brand != car.brand) {
            sorted.push({
                brand: car.brand, models: [],
                totalCount: 0
            });
        }
        sorted[sorted.length - 1].models.push({model: car.model, count: Number(car.count)});
        sorted[sorted.length - 1].totalCount += Number(car.count);
        last_brand = car.brand;

    });
    return sorted;
}


/*export var job = cron.schedule('* 10,30,50 * * * *', async () => {
    console.log("periodicCarCounter job start");
    const prisma = new PrismaClient();
    let prismaquery = Prisma.sql`SELECT brand, model, COUNT(brand) AS count
FROM szakdoga.car GROUP BY brand, model;`;
    let query: IUnsortedCarSelection[] = await prisma.$queryRaw(prismaquery);
    CAR_SELECTION = sortCarSelection(query);
    console.log("periodicCarCounter job finished");
}, {
    scheduled: true
});*/

/*export var job = new CronJob('* 10,30,50 * * * *', async function () {
    console.log("periodicCarCounter job start");
    
    console.log("periodicCarCounter job finished");
}, 
null, 
true , 
'Europe/Budapest', 
null, 
true);*/

export async function GET(req: Request) {
    try {
        const prisma = new PrismaClient();
        let prismaquery = Prisma.sql`SELECT brand, model, COUNT(brand) AS count
            FROM szakdoga.car GROUP BY brand, model;`;
        let query: IUnsortedCarSelection[] = await prisma.$queryRaw(prismaquery);
        car_selection.splice(0, car_selection.length);
        car_selection.push.apply(car_selection, await sortCarSelection(query));
        return NextResponse.json(car_selection, {status: 200});
    }catch (error) {
        console.log(error);
        return NextResponse.json({ error: error}, {status: 500});
    }
}

export async function DELETE(req: Request) {
    try {
        console.log("periodicCarCounter job stopped");

        return NextResponse.json({}, {status: 200});
    }catch (error) {
        console.log(error);
        return NextResponse.json({ error: error}, {status: 500});
    }
}

const car_selection: ISortedCarSelection[] = [];

export async function get_car_selection() {
    return car_selection;
}