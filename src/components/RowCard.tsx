import { ICarListing } from "@/lib/car";  //   date fuel 
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";
export default function RowCard({car} : {car: ICarListing}) {
    return (
        <div className="hvr-icon mx-5 h-fit bg-red-700">
            <a href={`/cars/${car.id}`} target="_blank" className=""> 

            <div className="hvr-icon mx-5 h-fit transition-all duration-300 bg-gradient-to-l to-white via-white from-blue-300 bg-size-200 bg-pos-0 hover:bg-pos-100  
                            border-2 border-blue-400 rounded-xl grid grid-rows-3 lg:grid-cols-3 bg-red-700 lg:h-52 ">
                                     
                <div className="col-span-1 flex mt-1 mb-1 relative w-fit h-fit flex-shrink-0  place-self-center lg:ml-5 lg:place-self-start ">
                    <img className="w-full lg:w-64 object-cover object-center " loading="lazy" src={car.images[0]}  alt="A hírdetett autó képe" />
                </div>

                <div className="py-4 w-full lg:col-span-2 h-full grid lg:grid-rows-3  lg:row-span-3">

                    <div className="lg:grid grid-cols-2 grid-rows-2 row-span-2 ">
                        <div className="row-start-2 col-start-1 text-2xl font-bold ml-10 lg:ml-0 inline-block w-fit  hvr-icon ">
                            {car.brand} {car.model}
                            </div>
                        
                        <div className=" text-lg col-start-2 font-bold  mr-5 tabular-nums inline-block w-fit place-self-end">{car.price.toLocaleString()} Ft</div>
                        <div className="text-xl col-start-2 row-start-2 font-bold  mr-5 tabular-nums inline-block w-fit place-self-end text-blue-600"><p className="inline-block font-normal text-base text-black">Akciós ár:</p>  {(car.price*0.8).toLocaleString()} Ft</div>
                        
                        <hr className="w-full col-span-2  mb-2  h-px mx-auto bg-slate-400 border-0" />
                    </div>
                    
                    <div className="text-gray-500 w-fit ml-5 lg:ml-0 tabular-nums grid grid-rows-2">
                    <div className="col-span-3 row-span-2 hidden md:block">
                    | {car.mileage.toLocaleString()} km | {car.gearbox} | {car.cc.toLocaleString()} cc  | {car.horsepower} le | {car.year} | {car.fuel_type} |<br />
                    </div>
                    <div className="row-span-1 row-start-1 md:hidden grid grid-flow-col">
                    <div> {car.mileage.toLocaleString()} km</div> <div>| {car.gearbox} |</div> <div>{car.cc.toLocaleString()} cc  |</div>
                    </div>
                    <div className="row-span-1 row-start-2 md:hidden grid grid-flow-col">
                    <div> | {car.horsepower} le |</div> <div>| {car.year} |</div> <div>| {car.fuel_type} |</div>
                    </div>
                    </div>
                    
                    
                    
                </div>

            </div>

            </a>
        </div>
    )
}