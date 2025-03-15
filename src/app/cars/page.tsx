"use server";

import { get_car_selection } from "@/app/jobs/carCounter/route";
import { CarSearchCard } from "@/components/CarSearchCard"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import Rowcard from "@/components/RowCard"
import RowCardHL from "@/components/RowCardHL"




export default async function Page() {
    let cars = await get_car_selection();
    console.log(cars);
    return (
        <div className="flex flex-col h-screen">
            <div>
                <Header />
            </div>

            <div>
                <div className="">
                    <div className="mx-5 lg:mx-56 lg:mt-24">
                        <div className="grid grid-cols-1 lg:grid-cols-4">
                            <div className="h-auto row-span-11 hidden lg:block"><CarSearchCard {...cars}  /></div>
                            <div className="col-span-3">
                                <div className="mb-3"><Rowcard /></div>{/*Note to self: ez RowcardHL ird vissza bulcsu !!!!!!!!!!!!!!!!*/}
                                <div className="mb-3"><Rowcard /></div>
                                <div className="mb-3"><Rowcard /></div>
                                <div className="mb-3"><Rowcard /></div>
                                <div className="mb-3"><Rowcard /></div>
                                <div className="mb-3"><Rowcard /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>


    )
}