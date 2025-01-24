import { Prisma, PrismaClient } from "@prisma/client";

export interface ISearch {
    brand: string | "",
    model: string | "",
    fuel_type: string[] | undefined,
    price: number[] | [0,2000000000],
    km: number[] | [0,2000000000],
    features: number | 0,
    year: number[] | [0,2500],
    weight: number[] | [0,2000000000],
    hp: number[] | [0,2000000000],
    cc: number[] | [0,2000000000],
    wheels: string[] | undefined,
    gearbox: string[] | undefined,
    passengers: number[] | undefined,
    door: number[] | undefined,
    color: string[] | undefined,
    status: string[] | undefined
}

export async function Search(search: ISearch) {
    const prisma = new PrismaClient();
    let query = {where: {
        brand: {
            contains: search.brand ?? undefined
        },
        model: {
            contains: search.model ?? undefined
        },
        fuel_type: {
            in: search.fuel_type ?? undefined
        },
        discounted_price: {
            gt: search.price[0] ?? 0,
            lt: search.price[1] ?? 999999999
        },
        km: {
            gt: search.km[0] ?? 0,
            lt: search.km[1] ?? 9999999999,
        },
        year: {
            gt: search.year[0] ?? 0,
            lt: search.year[1] ?? 999999999
        },
        weight: {
            gt: search.weight[0] ?? 0,
            lt: search.weight[1] ?? 999999999
        },
        horsepower: {
            gt: search.hp[0] ?? 0,
            lt: search.hp[1] ?? 99999999999
        },
        cc: {
            gt: search.cc[0] ?? 0,
            lt: search.cc[1] ?? 99999999999
        },
        wheel: {
            in: search.wheels
        },
        gearbox: {
            in: search.gearbox
        },
        passengers: {
            in: search.passengers
        },
        door_nmbr: {
            in: search.door
        },
        color: {
            in: search.color
        },
        status: {
            in: search.status
        }
    }};
    console.log(query);
    const searchResult = await prisma.car.findMany(query);
    if (search.features != 0 && !Number.isNaN(search.features)) {
        let filteredResult = searchResult.filter((result) => (result.features & search.features) == result.features);
        return filteredResult;
    }else {
        return searchResult;
    }

}