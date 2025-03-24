import { ICarListing } from "@/lib/car";  //   date fuel 
import Image from "next/image";
export default function RowCard({car} : {car: ICarListing}) {
    return (
        <div className="">
            <div className="lg:flex gap-3 lg:min-h-52 bg-white border border-gray-950 rounded-xl overflow-hidden items-center justify-start ">
                <div className="flex mt-1 relative w-52 h-32 flex-shrink-0  ml-5 lg:ml-0 place-self-start lg:place-self-center">
                    <img className="ml-1 w-full lg:absolute lg:left-0 lg:top-0 lg:w-full lg:h-full object-cover object-center transition duration-50" loading="lazy" src={car.images[0]} alt="car placeholder img" />
                </div>
                <div className="py-4  w-full">
                    <div className="grid grid-cols-2 grid-rows-2">
                        <div className="row-start-2 text-xl font-bold ml-5 lg:ml-0 inline-block w-fit mr-5">{car.brand} {car.model}</div>
                        
                        <div className="text-lg col-start-2 font-bold  mr-5 tabular-nums inline-block w-fit place-self-end">{car.price.toLocaleString()} Ft</div>
                        <div className="text-xl row-start-2 font-bold  mr-5 tabular-nums inline-block w-fit place-self-end text-blue-600"><p className="inline-block font-normal text-base text-black">Akciós ár:</p>  {(car.price*0.8).toLocaleString()} Ft</div>
                        
                        <hr className="w-full col-span-2  mb-2  h-px mx-auto bg-slate-400 border-0" />
                    </div>
                    
                    <div className="text-gray-500 w-fit ml-5 lg:ml-0 tabular-nums">
                    {car.mileage.toLocaleString()} km | {car.gearbox} | {car.cc.toLocaleString()} cc  | {car.horsepower} le | {car.year} | {car.fuel_type} |<br />
                    <hr className="w-full  mb-2  h-px  bg-slate-400 border-0 " />
                    </div>
                    
                    <div className="hidden  lg:text-gray-500 text-wrap w-96 ">
                        {/* {car.description}  */}
                        <p className="line-clamp-3 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae vero commodi, ipsam aliquam dicta, obcaecati officia maiores quas dolor voluptas nobis officiis, at non rerum similique sit explicabo iste cupiditate!</p>
                        
                    </div>
                    <button className="bg-rose-200  mt-2 md:w-6/12  h-10 rounded-xl hvr-forward">
                        <a href="" target="_blank" className=""> Tovább az autó megtekintéséhez</a>
                            
                        
                    </button>
                </div>
            </div>
        </div>
    )
}