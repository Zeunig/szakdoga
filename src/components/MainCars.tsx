import { ICarListing } from "@/lib/car";  //   date fuel 
import {Divide, Flame, ImageIcon, ImageOff, Info, InfoIcon, LucideArrowRight, TriangleAlert } from "lucide-react";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { HoverCard } from "@radix-ui/react-hover-card";
import { HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
export default function MainCarsHL({ car }: { car: ICarListing }) {
    return (


        <a href={`/cars/${car.id}`} target="_blank" className="">
                       
            <div className="mx-5 hvr-icon  transition-all duration-300 bg-white lg:bg-gradient-to-l to-white via-white from-blue-300 bg-size-200 bg-pos-0 hover:bg-pos-100  
                            border-4 border-blue-400 rounded-xl grid grid-flow-row lg:grid-cols-3 h-fit w-[340px] lg:w-fit lg:h-52 place-self-center">

                
                <div className=" col-span-1 flex mt-1 mb-1 relative w-52 lg:w-fit h-fit flex-shrink-0  place-self-center lg:ml-5  ">
                    
                    {car.images.length == 0 && <ImageIcon className="size-44 place-self-center text-blue-300 " />}
                    {car.images.length > 0 && <img className="w-full lg:w-64 object-cover object-center place-self-start" loading="lazy" src={car.images[0]} alt="" />}

                </div>

                <div className="py-4 w-full lg:col-span-2 h-full grid grid-flow-row  lg:row-span-3">

                    <div className="grid grid-flow-row lg:grid-cols-2 row-span-2 ">
                        <div className="lg:row-start-2 row-start-1 col-start-1 text-3xl lg:text-2xl font-bold ml-10 lg:ml-5  w-fit  hvr-icon   ">

                            <div className="flex items-center">
                            {car.brand} {car.model}
                            
                            </div>
                            
                        </div>


                        <div className=" text-base lg:col-start-2 row-start-4 lg:row-start-1  font-bold ml-5  lg:mr-5 tabular-nums inline-block w-full lg:w-fit lg:place-self-end">Eredeti ár: {car.price.toLocaleString()} Ft</div>
                        <div className="text-2xl lg:col-start-2  row-start-3 lg:row-start-2 font-bold  ml-5 lg:mr-5 tabular-nums inline-block w-full lg:w-fit lg:place-self-end text-blue-600 "><p className="inline-block font-normal text-base text-black">Akciós ár:</p>  {(car.price * 0.8).toLocaleString()} Ft</div>

                        <hr className="w-full col-span-2  mb-2  h-px mx-auto bg-slate-400 border-0" />
                    </div>


                    <div className="text-gray-500 w-fit ml-5 lg:ml-0 tabular-nums grid grid-rows-2 text-center">



                        <div className="row-span-1 row-start-1  grid grid-flow-col gap-2">

                            <div>| {car.mileage.toLocaleString()} km |</div> <div>| {car.gearbox} |</div> <div>| {car.cc.toLocaleString()} cc  |</div>

                        </div>

                        <div className="row-span-1 row-start-2  grid grid-flow-col">

                            <div> | {car.horsepower} le |</div> <div>| {car.year} |</div> <div>| {car.fuel_type} |</div>

                        </div>

                    </div>




                </div>

                </div>
            
        </a>

    )
}