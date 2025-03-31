import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { ICarListing } from "@/lib/car"
import { EditIcon, Trash } from "lucide-react"

export default function MyCars({car} : {car: ICarListing}) {
    console.log();
    return (
        <div>
            <Card className="w-72 h-90 border-dashed border-gray-800  ">
                <CardHeader>
                    <img src={car.car_image_relation[0]["image_url"]} alt="CarIMG" className="w-60 h-30" />
                    <CardTitle>{car.brand} {car.model}</CardTitle>
                    <CardDescription className="font-mono text-xs">{car.mileage} km | {car.horsepower} le | {car.cc} cc</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="diplay: inline font-bold">{car.price.toLocaleString()} Ft</p><p className="diplay: inline text-gray-400"> - Ár </p>
                    <br />
                    {
                        car.price != car.discounted_price && (<><p className="diplay: inline font-bold text-blue-600">{car.discounted_price} Ft</p><p className="diplay: inline text-gray-400"> - Akciós ár</p></>)
                    }
                </CardContent>
                <CardFooter className="text-xs text-muted-foreground" >
                    <button>
                        <EditIcon className="text-blue-600" /> {/* TODO : MŰKÖDJENEK EZEK A GOMBOK */}
                    </button>
                    <button>
                        <Trash className="text-red-600" />
                    </button>

                </CardFooter>
            </Card>
        </div>
    )
}