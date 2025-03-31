"use client";

import { ISortedCarSelection } from "@/app/jobs/carCounter/route";
import { CarSearchCard } from "./CarSearchCard";
import { Footer } from "./Footer";
import { Header } from "./Header";
import RowCard from "./RowCard";
import RowCardHL from "./RowCardHL";
import { ICarListing, parseCarListing } from "@/lib/car";
import React, { useEffect } from "react";
import axios from "axios";

export default function SearchPage({cars}: {cars: ISortedCarSelection[]}) {
    let [searchResult, setSearchResult] = React.useState<ICarListing[]>([]);
    let [loading, setLoading] = React.useState(false);
    let [resultCount, setResultCount] = React.useState(-1);
    /*useEffect(() => {
        axios.get("/api/marketplace/search").then((res) => {
            let cars = [];
            for(var i = 0; i < res.data["data"].length; i++) {                
                cars.push(parseCarListing(res.data["data"][i]));
            }
            setSearchResult(cars);
        })
    }, [setSearchResult]);*/
    return (
        <div>
                <div className="">
                    <div className="mx-5 lg:mx-56 lg:mt-24">
                        <div className="grid grid-cols-1 lg:grid-cols-4">
                            <div className="h-auto lg:row-span-11"><CarSearchCard cars={cars} setSearchResult={setSearchResult} setLoading={setLoading} setResultCount={setResultCount} /></div>
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