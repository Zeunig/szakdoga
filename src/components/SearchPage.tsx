import { ISortedCarSelection } from "@/app/jobs/carCounter/route";
import { CarSearchCard } from "./CarSearchCard";
import { Footer } from "./Footer";
import { Header } from "./Header";
import RowCard from "./RowCard";
import RowCardHL from "./RowCardHL";
import { ICarListing } from "@/lib/car";
import React from "react";

export default function SearchPage({cars}: {cars: ISortedCarSelection[]}) {
    let [searchResult, setSearchResult] = React.useState<ICarListing[]>([]);
    return (
        <div>
            <Header />
            <div>
                <div className="">
                    <div className="mx-5 lg:mx-56 lg:mt-24">
                        <div className="grid grid-cols-1 lg:grid-cols-4">
                            <div className="h-auto row-span-11"><CarSearchCard cars={cars} setSearchResult={setSearchResult}/></div>
                            <div className="col-span-3">
                                <div className="mb-3"><RowCardHL /></div>
                                <div className="mb-3"><RowCard /></div>
                                <div className="mb-3"><RowCard /></div>
                                <div className="mb-3"><RowCard /></div>
                                <div className="mb-3"><RowCard /></div>
                                <div className="mb-3"><RowCard /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}