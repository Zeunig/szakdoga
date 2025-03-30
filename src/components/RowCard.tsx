import { ICarListing } from "@/lib/car";  //   date fuel 
import { LucideArrowRight } from "lucide-react";
import Image from "next/image";
export default function RowCard({car} : {car: ICarListing}) {
    return (
        <div className="hvr-icon w-[1045px] mx-5 hvr-icon-fade ">
            <a href={`/cars/${car.id}`} target="_blank" className=""> 

            <div className="transition-all duration-300 bg-gradient-to-l to-white via-white from-blue-300 bg-size-200 bg-pos-0 hover:bg-pos-100  
                            border-2 border-blue-400 rounded-xl grid grid-cols-3 h-52 ">

                <div className="col-span-1 flex mt-1 mb-1 relative w-fit h-fit flex-shrink-0   ml-5 place-self-start ">
                    <img className="w-full    lg:w-64 object-cover object-center" loading="lazy" src={car.images[0]}  alt="A hírdetett autó képe" />
                </div>

                <div className="py-4  w-full col-span-2  h-full grid grid-rows-3">

                    <div className="grid grid-cols-2 grid-rows-2 row-span-2 ">
                        <div className="row-start-2 col-start-1 text-2xl font-bold ml-10 lg:ml-0 inline-block w-fit  hvr-icon ">
                            {car.brand} {car.model}
                            </div>
                        
                        <div className=" text-lg col-start-2 font-bold  mr-5 tabular-nums inline-block w-fit place-self-end">{car.price.toLocaleString()} Ft</div>
                        <div className="text-xl col-start-2 row-start-2 font-bold  mr-5 tabular-nums inline-block w-fit place-self-end text-blue-600"><p className="inline-block font-normal text-base text-black">Akciós ár:</p>  {(car.price*0.8).toLocaleString()} Ft</div>
                        
                        <hr className="w-full col-span-2  mb-2  h-px mx-auto bg-slate-400 border-0" />
                    </div>
                    
                    <div className="text-gray-500 w-fit ml-5 lg:ml-0 tabular-nums">
                    | {car.mileage.toLocaleString()} km | {car.gearbox} | {car.cc.toLocaleString()} cc  | {car.horsepower} le | {car.year} | {car.fuel_type} |<br />
                    
                    </div>
                    
                    <div className="hidden  lg:text-gray-500 text-wrap w-96 ">
                        {/* {car.description}  */}
                        <p className="line-clamp-3 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae vero commodi, ipsam aliquam dicta, obcaecati officia maiores quas dolor voluptas nobis officiis, at non rerum similique sit explicabo iste cupiditate!</p>
                        
                    </div>
                    
                </div>

            </div>

            </a>
        </div>
    )
}