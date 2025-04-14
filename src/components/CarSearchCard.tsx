"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { BrandCB } from "@/components/BrandCB"
import { Search } from "@/lib/search/search"
import { SearchIcon } from "lucide-react"
import { ModelCB } from "./ModelCB"
import { get_car_selection, ISortedCarSelection } from "@/app/jobs/carCounter/route"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import React, { ChangeEvent, useEffect } from "react";
import { ICarListing, parseCarListing } from "@/lib/car";
import { CB } from "./CB";
import axios from 'axios';
import { useSearchParams } from "next/navigation";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";

export interface searchCondition {
    brand?: string,
    model?: string,
    min_price?: number,
    max_price?: number,
    fuel_type?: string[],
    min_km?: number,
    max_km?: number,
    min_year?: number,
    max_year?: number,
    min_weight?: number,
    max_weight?: number,
    min_cc?: number,
    max_cc?: number,
    min_hp?: number,
    max_hp?: number,
    wheels?: string[],
    gearbox?: string[],
    min_doors?: number,
    max_doors?: number,
    min_passengers?: number,
    max_passengers?: number
    features?: number,
    status?: string[],
    color?: string[]
}


export function CarSearchCard({ cars, setSearchResult, setLoading, setResultCount, searchConditions, setSearchConditions }: {
    cars: ISortedCarSelection[],
    setSearchResult: React.Dispatch<React.SetStateAction<ICarListing[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setResultCount: React.Dispatch<React.SetStateAction<number>>,
    searchConditions: searchCondition,
    setSearchConditions: React.Dispatch<React.SetStateAction<searchCondition>>
}) {
    const searchParams = useSearchParams();
    const [selectedBrand, setSelectedBrand] = React.useState("");
    /*function changeSearchCondition({value}: {value: searchCondition}) {

    }*/
    async function search() {
        setLoading(true);
        let url = new URL("/api/marketplace/search", window.location.origin);
        console.log("hawk");
        for (var i = 0; i < Object.keys(searchConditions).length; i++) {
            if (Array.isArray(Object.values(searchConditions)[i])) {
                if (Object.values(searchConditions)[i].length != 0) {
                    let value = "";

                    for (var j = 0; j < Object.values(searchConditions)[i].length; j++) {

                        value += Object.values(searchConditions)[i][j];
                        if (j + 1 !== Object.values(searchConditions)[i].length) {
                            value += ",";
                        }
                    }
                    url.searchParams.append(Object.keys(searchConditions)[i], value);
                }

            } else {
                console.log(`${Object.keys(searchConditions)[i]} ${Object.values(searchConditions)[i]}`);
                if (Object.values(searchConditions)[i] !== "") {
                    console.log("swag");
                    url.searchParams.append(Object.keys(searchConditions)[i], Object.values(searchConditions)[i]);
                }
            }
        }
        console.log(url);
        axios.get(url.toString()).then((res) => {
            let cars = [];
            for (var i = 0; i < res.data["data"].length; i++) {
                cars.push(parseCarListing(res.data["data"][i]));
            }
            setSearchResult(cars);
            setResultCount(res.data["count"]);
            setLoading(false);
        });
    }
    useEffect(() => {
        if (searchParams.get("search") == '1') {
            search().then(() => { console.log("search complete") });
            return;
        }
    }, [setSearchConditions, setResultCount, setLoading, setSearchResult]);
    /*function change(e: ChangeEvent<HTMLInputElement>) {
        if(e.target.id.startsWith("wheels")) {
            let value = e.target.id.split(".")[-1].toUpperCase();
            let wheels = selectedWheels;
            if(e.target.checked) {
                wheels.push(value);
                setSelectedWheels(wheels);
            }else {
                if(wheels.indexOf(value) !== -1) {
                    wheels.splice(wheels.indexOf(value), 1);
                }
                setSelectedWheels(wheels);
            }
        }else if(e.target.id.startsWith("gearbox")) {
            let value = e.target.id.split(".")[-1].toUpperCase();
            let gearbox = selectedGearbox;
            if(e.target.checked) {
                gearbox.push(value);
                setSelectedGearbox(gearbox);
            }else {
                if(gearbox.indexOf(value) !== -1) {
                    gearbox.splice(gearbox.indexOf(value), 1);
                }
                setSelectedGearbox(gearbox);
            }
        }else if(e.target.id.endsWith("passengers")) {

        }
    }*/
    function handleBrandOrModelChange(value: string, type: string) {
        if (type == "brand") {
            setSearchConditions({
                ...searchConditions,
                [type]: value,
                "model": ""
            });
        } else {
            setSearchConditions({
                ...searchConditions,
                [type]: value,
            });
        }
        console.log(searchConditions);
    }
    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value, type } = e.target;
        console.log(name);
        const parsedValue = type === 'number' ? parseFloat(value) : value;

        setSearchConditions({
            ...searchConditions,
            [name]: parsedValue
        });
        console.log(searchConditions);
    }
    function handleCheckbox(e: ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = e.target;
        const parsedValue = value === 'on' ? true : false;
        const category = name.split(".")[0];
        const parsedItem = name.split(".")[1];
        console.log(checked);
        if (checked) {
            setSearchConditions({
                ...searchConditions,
                [category]: [...(searchConditions as any)[category], parsedItem]
            });
        } else {
            setSearchConditions({
                ...searchConditions,
                [category]: ((searchConditions as any)[category] || []).filter((item: string) => item !== parsedItem)
            });
        }

        console.log(searchConditions);
    }
    return (
        <div className="mb-16">
            <Card className="lg:w-80 lg:h-fit border-dashed bg-blue-100 border-blue-800">
                <CardHeader>

                    <CardTitle className="text-lg font-bold">
                        Keresés
                        <hr className="w-52 h-px bg-slate-400 border-0" />
                    </CardTitle>

                </CardHeader>
                <CardContent>
                    <form>

                        <div className="">
                            <Collapsible className="">

                                <CollapsibleTrigger className="text-blue-600 font-bold text-lg w-full"> Márka, modell</CollapsibleTrigger>

                                <CollapsibleContent className="grid grid-flow-row border-2 border-slate-300 rounded-lg mb-2">

                                    <div className="ml-2 mb-2 mt-1">

                                    <label htmlFor="" className="font-semibold">Márka <br /> </label>
                                        <BrandCB car_selection={cars} setSelectedBrand={setSelectedBrand} onInputChange={handleBrandOrModelChange} />

                                    </div>
                                    <div className="ml-2 mb-2">

                                        <label htmlFor="" className="font-semibold">Modell <br /> </label>
                                        <ModelCB car_selection={cars} selectedBrand={selectedBrand} onInputChange={handleBrandOrModelChange} />

                                    </div>

                                    <div className="ml-2 mb-2">
                                        <label htmlFor="" className="font-semibold">Vételár (-tól, -ig)</label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="minprice" name="min_price" className="border w-[180px] lg:w-[120px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxprice" name="max_price" className="border w-[180px] lg:w-[120px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>

                                    <div className="ml-2 mt-3">
                                        <label htmlFor="" className="font-semibold">Üzemanyag</label><br></br>
                                        <div className="grid grid-flow-col grid-rows-3">
                                            <div className="flex content-center gap-x-2">
                                                <input type="checkbox" name="fuel_type.benzin" id="fuel_type.1" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="fuel_type.1" className="">Benzin</label>
                                            </div>

                                            <div className="flex content-center gap-x-2">
                                                <input type="checkbox" name="fuel_type.dízel" id="fuel_type.2" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="fuel_type.2" className="">Dízel</label>
                                            </div>

                                            <div className="flex content-center gap-x-2">
                                                <input type="checkbox" name="fuel_type.hibrid" id="fuel_type.3" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="fuel_type.3" className="">Hibrid</label>
                                            </div>

                                            <div className="flex content-center gap-x-2">
                                                <input type="checkbox" name="fuel_type.elektromos" id="fuel_type.4" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="fuel_type.4" className="">Elektromos</label>
                                            </div>

                                            <div className="flex content-center gap-x-2">
                                                <input type="checkbox" name="fuel_type.biodízel" id="fuel_type.5" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="fuel_type.5" className="">Biodízel</label>
                                            </div>

                                            <div className="flex content-center gap-x-2">
                                                <input type="checkbox" name="fuel_type.gáz" id="fuel_type.6" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="fuel_type.6" className="">Gázolaj</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ml-2 mt-3">
                                        <label htmlFor="" className="font-semibold">Állapot</label><br></br>

                                        <div className="grid grid-flow-row place-content-start mb-3 mt-1 ml-2">
                                            <div className="flex content-center gap-x-2">
                                                <input className="accent-green-600 size-5" type="checkbox" name="status.új" id="status.1" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="status.1" className="h-full w-20 ">Új</label>
                                            </div>

                                            <div className="flex content-center gap-x-2">
                                                <input className="accent-green-400 size-5" type="checkbox" name="status.újszerű" id="status.2" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="status.2">Újszerű</label>
                                            </div>

                                            <div className="flex content-center gap-x-2">
                                                <input className="accent-green-200 size-5" type="checkbox" name="status.használt" id="status.3" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="status.3">Használt</label>
                                            </div>

                                            <div className="flex content-center gap-x-2">
                                                <input className="accent-yellow-400 size-5" type="checkbox" name="status.megviselt" id="status.4" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="status.4">Megviselt</label>
                                            </div>

                                            <div className="flex content-center gap-x-2">
                                                <input className="accent-red-300 size-5" type="checkbox" name="status.hibás" id="status.5" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="status.5">Hibás</label>
                                            </div>

                                            <div className="flex content-center gap-x-2">
                                                <input className="accent-red-600 size-5" type="checkbox" name="status.hiányos" id="status.6" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="status.6" className="">Hiányos</label>
                                            </div>


                                        </div>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        </div>



                        <div>
                            <Collapsible className="">

                                <CollapsibleTrigger className="text-blue-600 font-bold text-lg w-full">Általános információk</CollapsibleTrigger>

                                <CollapsibleContent className="grid grid-flow-row border-2 border-slate-300 rounded-lg mb-2 ">



                                    <div className="ml-2 mt-3">
                                        <label htmlFor="" className="font-semibold">Kilométer (-tól, -ig)</label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="minkm" name="min_km" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxkm" name="max_km" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>
                                    
                                    <div className="ml-2 mt-3">
                                        <label htmlFor="" className="font-semibold">Évjárat</label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="minyear" name="min_year" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxyear" name="max_year" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>

                                    <div className="ml-2 mt-3">
                                        <label htmlFor="" className="font-semibold">Lóerő</label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="minhp" name="min_hp" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxhp" name="max_hp" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>





                                    <div className="ml-2 mt-3">
                                    <label htmlFor="" className="font-semibold">Szállítható utasok száma</label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="minpassengers" name="min_passengers" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxpassengers" name="max_passengers" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>

                                    <div className="ml-2 mt-3">
                                    <label htmlFor="" className="font-semibold">Ajtók száma</label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="mindoors" name="min_doors" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxdoors" name="max_doors" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>

                                    <div className="ml-2 mt-3">
                                        <label htmlFor="" className="font-semibold">Szín</label><br></br>

                                        <ScrollArea className="h-[103px] bg-slate-900 bg-opacity-20 rounded-lg w-44">
                                            <ScrollBar />
                                            <div className="grid gap-y-[1px] mx-1 my-1">
                                                <div className="flex content-center gap-x-2">
                                                    <input className="accent-white size-5" type="checkbox" name="color.fehér" id="color.1" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.1" className="">Fehér</label>
                                                </div>

                                                <div className="flex content-center gap-x-2">
                                                    <input className="accent-blue-600 size-5" type="checkbox" name="color.kek" id="color.2" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.2" className="">Kék</label>
                                                </div>

                                                <div className="flex content-center gap-x-2">
                                                    <input className="accent-red-600 size-5" type="checkbox" name="color.piros" id="color.3" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.3" className="">Piros</label>
                                                </div>

                                                <div className="flex content-center gap-x-2">
                                                    <input className="accent-gray-400 size-5" type="checkbox" name="color.ezüst" id="color.4" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.4" className="">Ezüst</label>
                                                </div>

                                                <div className="flex content-center gap-x-2">
                                                    <input className="accent-green-600 size-5" type="checkbox" name="color.zöld" id="color.5" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.5" className="">Zöld</label>
                                                </div>

                                                <div className="flex content-center gap-x-2">
                                                    <input className="accent-yellow-300 size-5" type="checkbox" name="color.sárga" id="color.6" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.6" className="">Sárga</label>
                                                </div>

                                                <div className="flex content-center gap-x-2">
                                                    <input className="accent-red-700 size-5" type="checkbox" name="color.vörös" id="color.7" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.7" className="">Vörös</label>
                                                </div>

                                                <div className="flex content-center gap-x-2">
                                                    <input className="accent-purple-600 size-5" type="checkbox" name="color.lila" id="color.8" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.8" className="">Lila</label>
                                                </div>

                                                <div className="flex content-center gap-x-2">
                                                    <input className="accent-red-950 size-5" type="checkbox" name="color.barna" id="color.9" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.9" className="">Barna</label>
                                                </div>

                                                <div className="flex content-center gap-x-2">
                                                    <input className="accent-pink-500 size-5" type="checkbox" name="color.rózsaszín" id="color.10" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.10" className="">Rózsaszín</label>
                                                </div>

                                                <div className="flex content-center gap-x-2">
                                                    <input className="accent-orange-600 size-5" type="checkbox" name="color.narancs" id="color.11" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.11" className="">Narancs</label>
                                                </div>

                                                <div className="flex content-center gap-x-2">
                                                    <input className="accent-slate-300 size-5" type="checkbox" name="color.szürke" id="color.12" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.12" className="">Szürke</label>
                                                </div>

                                                <div className="flex content-center gap-x-2">
                                                    <input className="accent-black size-5" type="checkbox" name="color.fekete" id="color.13" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.13" className="">Fekete</label>
                                                </div>

                                                <div className="flex content-center gap-x-2">
                                                    <input className="accent-red-900 size-5" type="checkbox" name="color.bordó" id="color.14" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.14" className="">Bordó</label>
                                                </div>

                                                <div className="flex content-center gap-x-2">
                                                    <input className="accent-cyan-300 size-5" type="checkbox" name="color.türkíz" id="color.15" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.15" className="">Türkíz</label>
                                                </div>

                                                <div className="flex content-center gap-x-2">
                                                    <input className="accent-yellow-500 size-5" type="checkbox" name="color.arany" id="color.16" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.16" className="">Arany</label>
                                                </div>

                                                <div className="flex content-center gap-x-2">
                                                    <input className="size-5" type="checkbox" name="color.egyedi" id="color.17" onChange={(e) => { handleCheckbox(e) }} />
                                                    <label htmlFor="color.17" className="">Egyedi</label>
                                                </div>





                                            </div>
                                        </ScrollArea>
                                    </div>
                                    
                                    <br></br>
                                </CollapsibleContent>
                            </Collapsible>
                        </div>

                        <div className="">
                            <Collapsible className="">

                                <CollapsibleTrigger className="text-blue-600 font-bold text-lg w-full">Műszaki adtok</CollapsibleTrigger>

                                <CollapsibleContent className="grid grid-flow-row border-2 border-slate-300 rounded-lg mb-2">

                                    <div className="ml-2 mt-3">
                                        <label htmlFor="" className="font-semibold">Súly</label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="minweight" name="min_weight" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxweight" name="max_weight" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>

                                    <div className="ml-2 mt-3">
                                        <label htmlFor="" className="font-semibold">Köbcenti</label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="mincc" name="min_cc" className="border lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxcc" name="max_cc" className="border lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>


                                    <div className="ml-2 mt-3">
                                        <label htmlFor="" className="font-semibold">Kerékmeghajtás</label><br></br>
                                        <div className="grid grid-rows-2 grid-flow-col">
                                            <div className="flex content-center gap-x-2">
                                                <input type="checkbox" name="wheels.fwd" id="wheels.fwd" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="wheels.fwd" className="">Első kerék</label>
                                            </div>

                                            <div className="flex content-center gap-x-2">
                                                <input type="checkbox" name="wheels.rwd" id="wheels.rwd" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="wheels.rwd" className="">Hátsó kerék</label>
                                            </div>

                                            <div className="flex content-center gap-x-2">
                                                <input type="checkbox" name="wheels.awd" id="wheels.awd" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="wheels.awd" className="">Összkerék</label>
                                            </div>

                                            <div className="flex content-center gap-x-2">
                                                <input type="checkbox" name="wheels.4wd" id="wheels.4wd" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="wheels.4wd" className="">4X4</label>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="ml-2 mt-3 mb-3">
                                        <label htmlFor="" className="font-semibold">Váltó fajtája</label><br></br>
                                        <div className="grid grid-rows-3 grid-cols-2">

                                            <div className="flex content-center gap-x-2">
                                                <input type="checkbox" name="gearbox.automata" id="gearbox.1" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="gearbox.1" className="">Automata</label>
                                            </div>

                                            <div className="flex content-center gap-x-2">
                                                <input type="checkbox" name="gearbox.félautomata" id="gearbox.2" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="gearbox.2" className="">Félautomata</label>
                                            </div>
                                            

                                            <div className="flex content-center gap-x-2">
                                                <input type="checkbox" name="gearbox.manuális" id="gearbox.4" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="gearbox.4" className="">Manuális</label>
                                            </div>
                                            

                                            <div className="flex content-center gap-x-2">
                                                <input type="checkbox" name="gearbox.tiptronic" id="gearbox.5" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="gearbox.5" className="">Tiptronic</label>
                                            </div>

                                            <div className="flex content-center gap-x-2 col-span-2">
                                                <input type="checkbox" name="gearbox.fokozatmentes automata" id="gearbox.3" onChange={(e) => { handleCheckbox(e) }} />
                                                <label htmlFor="gearbox.3" className="">Fokozatmentes automata</label>
                                            </div>

                                            

                                        </div>

                                    </div>

                                </CollapsibleContent>
                            </Collapsible>
                        </div>


                        <button type="submit" value="delete" className="my-4 bg-blue-600 w-full rounded-lg text-sm text-white h-7" onClick={(e) => { e.preventDefault(); console.log(e); }}>Keresési kritériumok törlése</button>


                    </form>
                    {/*lg end*/}

                    <button className="h-10 rounded-lg bg-white w-full border-2 font-bold text-lg border-blue-600 duration-300 hover:bg-blue-600 hover:text-white hover:scale-110" onClick={async () => { await search(); }}>Keresés</button>






                </CardContent>

            </Card>

        </div>
    )
}