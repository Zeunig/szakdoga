"use server";

import { get_car_selection } from "@/app/jobs/carCounter/route";
import { CarSearchCard } from "@/components/CarSearchCard"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import Rowcard from "@/components/RowCard"
import RowCardHL from "@/components/RowCardHL"
import SearchPage from "@/components/SearchPage";
import { Suspense } from "react";




export default async function Page() {
    let cars = await get_car_selection();
    console.log(cars);
    return (
        <div className="flex flex-col h-screen">
                <div>
                    <Header />
                </div>
        
        <div>
            <Suspense>
                <SearchPage cars={cars}/>
            </Suspense>
        </div>
        <div className="my-auto mt-5">
            <Footer />
        </div>
        </div>
    )
}