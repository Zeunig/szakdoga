import { Prisma, PrismaClient } from "@prisma/client";

export interface ISearch {
    brand: string | undefined,
    model: string | undefined,
    fuel_type: string[] | undefined,
    price: number[] | [0,2000000000],
    km: number[] | [0,2000000000],
    features: number | undefined,
    year: number[] | [0,2500],
    weight: number[] | [0,2000000000],
    hp: number[] | [0,2000000000],
    cc: number[] | [0,2000000000],
    wheels: string[] | undefined,
    gearbox: string[] | undefined,
    passengers: number[] | [0,2000000000],
    door: number[] | [0, 2000000000],
    color: string[] | undefined,
    status: string[] | undefined,

    limit: number | 10,
    offset: number | 0
}

export async function Search(search: ISearch) {
    if (search.limit > 50) {
        return "Limit too high";
    }
    const prisma = new PrismaClient({
        log: ["query"]
      });
    /*let query = {where: {
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
        },
        features: {
            in: getListOfFlags(search.features, 274877906944)
        },
        skip: search.offset,
        take: search.limit
    }};
    console.log(query);
    const searchResult = await prisma.car.findMany(query);
    /*if (search.features != 0 && !Number.isNaN(search.features)) {
        let filteredResult = searchResult.filter((result) => (result.features & search.features) == result.features);
        return filteredResult;
    }else {
        return searchResult;
    }*/
   let prismaquery = Prisma.sql`
   SELECT szakdoga.car.*, szakdoga.user.name AS seller_name FROM szakdoga.car
   JOIN szakdoga.user ON szakdoga.car.seller_id=szakdoga.user.id
   WHERE 1=1
   ${!(Number.isNaN(search.features))
   ? Prisma.sql`AND (${search.features} & features) = ${search.features}`
   : Prisma.empty}
   ${search.brand !== null 
    ? Prisma.sql`AND brand LIKE ${search.brand}` 
    : Prisma.empty}
  ${search.model !== null 
    ? Prisma.sql`AND model LIKE ${search.model}` 
    : Prisma.empty}
  AND price BETWEEN ${search.price[0]} AND ${search.price[1]}
  ${search.fuel_type !== undefined 
    ? Prisma.sql`AND fuel_type IN ${search.fuel_type}` 
    : Prisma.empty}
  ${search.km && search.km[0] !== null && search.km[1] !== null
    ? Prisma.sql`AND mileage BETWEEN ${search.km[0]} AND ${search.km[1]}` 
    : Prisma.empty}
  ${search.year && search.year[0] !== null && search.year[1] !== null
    ? Prisma.sql`AND year BETWEEN ${search.year[0]} AND ${search.year[1]}` 
    : Prisma.empty}
  ${search.weight && search.weight[0] !== null && search.weight[1] !== null
    ? Prisma.sql`AND weight BETWEEN ${search.weight[0]} AND ${search.weight[1]}` 
    : Prisma.empty}
  ${search.hp && search.hp[0] !== null && search.hp[1] !== null
    ? Prisma.sql`AND horsepower BETWEEN ${search.hp[0]} AND ${search.hp[1]}` 
    : Prisma.empty}
  ${search.cc && search.cc[0] !== null && search.cc[1] !== null
    ? Prisma.sql`AND cc BETWEEN ${search.cc[0]} AND ${search.cc[1]}` 
    : Prisma.empty}
  ${search.wheels !== undefined 
    ? Prisma.sql`AND drive_type IN (${Prisma.join(search.wheels)})` 
    : Prisma.empty}
  ${search.gearbox !== undefined 
    ? Prisma.sql`AND gearbox IN (${Prisma.join(search.gearbox)})` 
    : Prisma.empty}
    ${search.passengers && search.passengers[0] !== null && search.passengers[1] !== null
    ? Prisma.sql`AND passengers BETWEEN ${search.passengers[0]} AND ${search.passengers[1]}` 
    : Prisma.empty}
    ${search.door && search.door[0] !== null && search.door[1] !== null
    ? Prisma.sql`AND doors BETWEEN ${search.door[0]} AND ${search.door[1]}` 
    : Prisma.empty}
  ${search.color !== undefined 
    ? Prisma.sql`AND color IN (${Prisma.join(search.color)})` 
    : Prisma.empty}
  ${search.status !== undefined 
    ? Prisma.sql`AND design IN (${Prisma.join(search.status)})` 
    : Prisma.empty}
    ${!(Number.isNaN(search.limit))
    ? Prisma.sql`LIMIT ${search.limit}`
    : Prisma.sql`LIMIT 10`}
    ${!(Number.isNaN(search.offset))
    ? Prisma.sql`OFFSET ${search.offset}`
    : Prisma.empty}
   `;
   let query: object[] = await prisma.$queryRaw(prismaquery);
   for(var i = 0; i < query.length; i++) {
      let hawk_tuah = await prisma.$queryRaw(Prisma.sql`SELECT image_url FROM szakdoga.car_image_relation WHERE car_id=${Number(query[i]["id"])}`);
        console.log(hawk_tuah);query[i]["car_image_relation"] = hawk_tuah;
        query[i]["id"] = Number(query[i]["id"]);
        query[i]["features"] = Number(query[i]["features"]);
   }

   return query;
}

function getListOfFlags(flag: number, ceil: number): number[] {
    let result = []
    for (let i = 0; i <= ceil; i++) {
        let cucc = i & flag;
        if (cucc == flag) {
            result.push(i);
        }
    }
    return result
}