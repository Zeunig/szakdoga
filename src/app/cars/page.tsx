"use server";

import { get_car_selection, ISortedCarSelection } from "@/app/jobs/carCounter/route";
import { CarSearchCard } from "@/components/CarSearchCard"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import Rowcard from "@/components/RowCard"
import RowCardHL from "@/components/RowCardHL"
import SearchPage from "@/components/SearchPage";
import { ICarListing } from "@/lib/car";
import React from "react";


export default async function Page() {
    let cars = await get_car_selection();
    console.log(cars);
    return (
        <div>
            <SearchPage cars={cars} />
        </div>
    )    
}