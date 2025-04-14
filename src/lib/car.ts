import { getFeatures, IFeatures } from "@/lib/search/features";
import { PrismaClient } from "@prisma/client";

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

export interface ICarListing {
    // Identification
    id: number;
    vin: string;
    
    // Listing details
    creation_date: string;
    seller_id: number;
    seller_name: string;
    featured: number;
    
    // Pricing
    price: number;
    discounted_price: number;
    
    // Car specifications
    brand: string;
    model: string;
    year: number;
    mileage: number;
    weight: number;
    horsepower: number;
    cc: number;
    fuel_type: string;
    gearbox: string;
    drive_type: string;
    condition: string;
    
    // Physical characteristics
    passengers: number;
    doors: number;
    color: string;
    
    // Additional details
    features: IFeatures;
    design: string | null;
    listed: number;

    images: string[];
    user: IUserPublic;
}
export interface IUserPublic {
    id: number,
    name: string,
    phone_number: string,
    email: string,
    address: string
}


export function parseCarListing(json: object): ICarListing {
    try {
        const id = Number(json.id);
        const creation_date = json.creation_date as string;
        const fuel_type = json.fuel_type as string;
        const gearbox = json.gearbox as string;
        const drive_type = json.drive_type as string;
        const condition = json.condition as string;
        const seller_name = json.seller_name as string;
        const seller_id = Number(json.seller_id);
        const featured = Number(json.featured);
        const price = Number(json.price);
        const discounted_price = Number(json.discounted_price);
        const year = Number(json.year);
        const mileage = Number(json.mileage);
        const weight = Number(json.weight);
        const horsepower = Number(json.horsepower);
        const cc = Number(json.cc);
        const passengers = Number(json.passengers);
        const doors = Number(json.doors);
        const listed = Number(json.listed);
        const features = getFeatures(Number(json.features));
        const user = json.user as IUserPublic;
        let images = [];
        for(var i = 0; i < json["car_image_relation"].length; i++) {
            images.push(json["car_image_relation"][i]["image_url"] as string);
        }
        // Construct and return the CarListing object
        const carListing: ICarListing = {
            id,
            creation_date,
            seller_id,
            featured,
            price,
            discounted_price,
            brand: json.brand as string,
            model: json.model as string,
            year,
            mileage,
            weight,
            horsepower,
            cc,
            fuel_type,
            gearbox,
            drive_type,
            condition,
            passengers,
            doors,
            color: json.color as string,
            features,
            vin: json.vin as string,
            design: json.design as string,
            seller_name: json.seller_name as string,
            listed,
            images,
            user
        };
        return carListing;
    } catch (error) {
        console.error(error);
        return undefined;
    }
}