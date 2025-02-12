export interface CarListing {
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
    features: number;
    design: string | null;
}


export function parseCarListing(json: object): CarListing {
    try {
        console.log(json);
        const id = Number(json.id);

        // Parse date
        const creation_date = json.creation_date as string;

        // Validate fuel type
        const fuel_type = json.fuel_type as string;
        // Validate gearbox type
        const gearbox = json.gearbox as string;
        // Validate drive type
        const drive_type = json.drive_type as string;

        // Validate condition
        const condition = json.condition as string;

        const features = Number(json.features);

        // Convert numeric strings to numbers
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

        // Construct and return the CarListing object
        const carListing: CarListing = {
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
            seller_name: json.seller_name as string
        };
        return carListing;
    } catch (error) {
        console.log(error);
        return undefined;
    }
}