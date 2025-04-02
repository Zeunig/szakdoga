"use client";

import { ISortedCarSelection } from "@/app/jobs/carCounter/route";
import { CarSearchCard, searchCondition } from "./CarSearchCard";
import { Footer } from "./Footer";
import { Header } from "./Header";
import RowCard from "./RowCard";
import RowCardHL from "./RowCardHL";
import { ICarListing, parseCarListing } from "@/lib/car";
import React, { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";

export default function SearchPage({cars}: {cars: ISortedCarSelection[]}) {
    let [searchResult, setSearchResult] = React.useState<ICarListing[]>([]);
    let [loading, setLoading] = React.useState(false);
    let [resultCount, setResultCount] = React.useState(-1);
    let [page, setPage] = React.useState(1);
    var fuel_type: string[] = [];
    const searchParams = useSearchParams();
    if(searchParams.get("fuel") === undefined || searchParams.get("fuel") === null || searchParams.get("fuel") === "") {
        fuel_type = ["Benzin","Dízel","Hibrid","Elektromos","Etanol","Biodízel","Gáz"];
    }else {
        fuel_type = [searchParams.get("fuel") || ""];
    }
    const [searchConditions, setSearchConditions] = React.useState<searchCondition>({
        brand: searchParams.get("brand") || "", 
        model: searchParams.get("model") || "", 
        fuel_type: fuel_type, 
        min_year: parseInt(searchParams.get("min_year") || "0"),
        max_year: parseInt(searchParams.get("max_year") || "0") ,
        min_price: parseInt(searchParams.get("min_price") || "0"),
        max_price: parseInt(searchParams.get("max_price") || "0"),
        min_km: 0,
        max_km: 999999,
        min_weight: 0,
        max_weight: 999999,
        min_cc: 0,
        max_cc: 999999,
        min_hp: 0,
        max_hp: 999999,
        min_doors: 0,
        max_doors: 999999,
        min_passengers: 0,
        max_passengers: 999999,
        wheels: [],gearbox: [], color: [], status: [], offset: 0
    });
    const result_per_search = 20;
    /*useEffect(() => {
        axios.get("/api/marketplace/search").then((res) => {
            let cars = [];
            for(var i = 0; i < res.data["data"].length; i++) {                
                cars.push(parseCarListing(res.data["data"][i]));
            }
            setSearchResult(cars);
        })
    }, [setSearchResult]);*/
    async function goToPage(page: number) {
        
    }
    return (
        <div>
                <div className="">
                    <div className="mx-5 lg:mx-56 lg:mt-24">
                        <div className="grid grid-cols-1 lg:grid-cols-4">
                            <div className="h-auto lg:row-span-11 mt-5 lg:mt-0"><CarSearchCard searchConditions={searchConditions} setSearchConditions={setSearchConditions} cars={cars} setSearchResult={setSearchResult} setLoading={setLoading} setResultCount={setResultCount} /></div>
                            <div className="col-span-3 bg-blue-200 rounded-lg border-2 border-blue-400">
                                <h5 className="-mt-[33px]">{resultCount == -1 ? "" : `Találatok száma : ${resultCount} db`}</h5>
                                <hr className="w-full  mb-2  h-px mx-auto bg-slate-400 border-0" />
                                {
                                    // ha még nincs kész a request, addig a logónkat mutatjuk
                                    loading ? 
                                        <img src="logo.png" className="size-72 animate-spin align-self-center justify-self-center flex my-20"/>
                                    :
                                    searchResult.map((car) => (
                                        <div key={car.id} className="w-full h-fit my-5 hvr-icon-forward"><RowCard car={car} /></div>
                                    ))
                                }   
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}