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
import React, { ChangeEvent } from "react";
import { ICarListing, parseCarListing } from "@/lib/car";
import { CB } from "./CB";
import axios from 'axios';
import { useSearchParams } from "next/navigation";

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


export function CarSearchCard({cars, setSearchResult, setLoading, setResultCount}: {
    cars: ISortedCarSelection[], 
    setSearchResult: React.Dispatch<React.SetStateAction<ICarListing[]>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setResultCount: React.Dispatch<React.SetStateAction<number>>
}) {
    const searchParams = useSearchParams();
    const [selectedBrand, setSelectedBrand] = React.useState("");
    var fuel_type: string[] = [];
    if(searchParams.get("fuel") === undefined || searchParams.get("fuel") === "") {
        fuel_type = [];
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
        wheels: [],gearbox: [], color: [], status: []});

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

                    for(var j = 0; j < Object.values(searchConditions)[i].length; j++) {

                        value += Object.values(searchConditions)[i][j];
                        if(j + 1 !== Object.values(searchConditions)[i].length) {
                            value += ",";
                        }
                    }
                    url.searchParams.append(Object.keys(searchConditions)[i], value);
                }

            } else {
                console.log(`${Object.keys(searchConditions)[i]} ${Object.values(searchConditions)[i]}`);
                if(Object.values(searchConditions)[i] !== "") {
                    console.log("swag");
                    url.searchParams.append(Object.keys(searchConditions)[i], Object.values(searchConditions)[i]);
                }
            }
        }
        console.log(url);
        axios.get(url.toString()).then((res) => {
            let cars = [];
            for(var i = 0; i < res.data["data"].length; i++) {                
                cars.push(parseCarListing(res.data["data"][i]));
            }
            setSearchResult(cars);
            setResultCount(res.data["count"]);
            setLoading(false);
        });
    }
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
        if(type == "brand") {
            setSearchConditions({
                ...searchConditions,
                [type]: value,
                "model": ""
            });
        }else {
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
        <div className="mb-20 ">
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

                                <CollapsibleTrigger className="text-blue-600 font-bold text-lg w-full"> Márka, model</CollapsibleTrigger>

                                <CollapsibleContent className="grid row-auto border-2 border-slate-300 rounded-lg mb-2">

                                    <div className="ml-2 mb-2 mt-1">

                                        <label htmlFor="" className="">Márka <br /> </label>
                                        <BrandCB car_selection={cars} setSelectedBrand={setSelectedBrand} onInputChange={handleBrandOrModelChange} />

                                    </div>
                                    <div className="ml-2 mb-2">

                                        <label htmlFor="">Model <br /> </label>
                                        <ModelCB car_selection={cars} selectedBrand={selectedBrand} onInputChange={handleBrandOrModelChange} />

                                    </div>

                                </CollapsibleContent>
                            </Collapsible>
                        </div>



                        <div>
                            <Collapsible className="">

                                <CollapsibleTrigger className="text-blue-600 font-bold text-lg w-full">Általános információk</CollapsibleTrigger>

                                <CollapsibleContent className="grid row-auto border-2 border-slate-300 rounded-lg mb-2 ">

                                    <div className="ml-2 mt-3">
                                        <label htmlFor="">Vételár (-tól, -ig)</label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="minprice" name="min_price" className="border w-[180px] lg:w-[120px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxprice" name="max_price" className="border w-[180px] lg:w-[120px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>
                                    <div className="ml-2 mt-3">
                                        <label htmlFor="">Állapot </label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="minprice" name="min_price" className="border w-[180px] lg:w-[120px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxprice" name="max_price" className="border w-[180px] lg:w-[120px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>

                                    <div className="ml-2 mt-3">
                                        <label htmlFor="">Kilométer (-tól, -ig)</label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="minkm" name="min_km" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxkm" name="max_km" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>


                                    <div className="ml-2 mt-3">
                                        <label htmlFor="">Évjárat</label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="minyear" name="min_year" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxyear" name="max_year" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>

                                    <div className="ml-2 mt-3">
                                        <label htmlFor="">Súly</label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="minweight" name="min_weight" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxweight" name="max_weight" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>

                                    <div className="ml-2 mt-3">
                                        <label htmlFor="">Szálítható utasok száma</label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="minpassengers" name="min_passengers" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxpassengers" name="max_passengers" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>

                                    <div className="ml-2 mt-3">
                                        <label htmlFor="">Ajtók száma</label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="mindoors" name="min_doors" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxdoors" name="max_doors" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>   
                                    

                                    <br></br>
                                </CollapsibleContent>
                            </Collapsible>
                        </div>

                        <div className="">
                            <Collapsible className="">

                                <CollapsibleTrigger className="text-blue-600 font-bold text-lg w-full">Műszaki adtok</CollapsibleTrigger>

                                <CollapsibleContent className="grid row-auto border-2 border-slate-300 rounded-lg mb-2">

                                    

                                <div className="ml-2 mt-3">
                                        <label htmlFor="">Köbcenti</label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="mincc" name="min_cc" className="border lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxcc" name="max_cc" className="border lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>

                                    
                                    <div className="ml-2 mt-3">
                                        <label htmlFor="">Kerékmeghajtás</label><br></br>
                                        <input type="checkbox" name="wheels.fwd" id="wheels.fwd" onChange={(e) => { handleCheckbox(e) }}></input>
                                        <input type="checkbox" name="wheels.rwd" id="wheels.rwd" onChange={(e) => { handleCheckbox(e) }}></input>
                                        <input type="checkbox" name="wheels.awd" id="wheels.awd" onChange={(e) => { handleCheckbox(e) }}></input>
                                        <input type="checkbox" name="wheels.4wd" id="wheels.4wd" onChange={(e) => { handleCheckbox(e) }}></input>
                                    </div>

                                    <div className="ml-2 mt-3">
                                        <label htmlFor="">Gearbox</label><br></br>
                                        <input type="checkbox" name="gearbox.manual" id="gearbox.manual" onChange={(e) => { handleCheckbox(e) }}></input>
                                        <input type="checkbox" name="gearbox.automatic" id="gearbox.automatic" onChange={(e) => { handleCheckbox(e) }}></input>
                                    </div>

                                    <div className="ml-2 mt-3">
                                        <label htmlFor="">Lóerő</label><br></br>
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="minhp" name="min_hp" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                        <input type="number" onChange={(e) => { handleInputChange(e) }} id="maxhp" name="max_hp" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    </div>
                                    
                                </CollapsibleContent>
                            </Collapsible>
                        </div>


                        <button type="submit"  value="dww" onClick={(e) => { e.preventDefault(); console.log(e); }}>wds</button>
                    </form>
                    {/*lg end*/}


                    <div className="grid grid-rows-2">
                        <button type="button" className="bg-slate-300" onClick={async () => { await search(); }}>Keresés</button>
                        <div className="row-"></div>
                    </div>

                </CardContent>
                <CardFooter className="text-xs text-muted-foreground" >
                    <p>© 2025 Körpörgő Autókereskedés™.</p>
                </CardFooter>
            </Card>
            
        </div>
    )
}