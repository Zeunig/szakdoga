import { PrismaClient } from "@prisma/client";
import { ICarListing } from "./car";

export interface IExtendedProfile {
    id: number,
    name: string,
    phone_number: number | null,
    email: string,
    avatar_url: string | null,
    join_date: Date,
    permissions: number,
    car: ICarListing[],
    favorites: ICarListing[]
}

declare global {
    interface BigInt {
        toJSON(): Number;
    }
}

BigInt.prototype.toJSON = function () { return Number(this) }

export async function get_my_profile(user_id: number, include_unlisted_cars: boolean) {
    const prisma = new PrismaClient();
    console.log(user_id);
    let query = await prisma.user.findFirst({
        where: {
            id: {
                equals: user_id
            }
        },
        include: {
            password: false,
            car: {
                include: {
                    car_image_relation: {
                        include: {
                            car_id: false,
                            id: false
                        }
                    },
                    features: false
                },
                where: {
                    listed: 1
                }
            },
            favorites: {
                include: {
                    car: {
                        include: {
                            car_image_relation: {
                                include: {
                                    car_id: false,
                                    id: false
                                }
                            },
                            features: false
                        },
                        where: {
                            listed: 1
                        }
                    },
                    
                }
            }
        }
    });
    
    return query as unknown as IExtendedProfile;
}