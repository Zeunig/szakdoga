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
import { ICarListing } from "@/lib/car";
import { CB } from "./CB";

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
    passengers?: number[],
    doors?: number[],
    color?: string[],
    features: number,
    status?: string[]
}

export function CarSearchCard({cars, setSearchResult}: {cars: ISortedCarSelection[], setSearchResult: React.Dispatch<React.SetStateAction<ICarListing[]>>}) {
    const [selectedBrand, setSelectedBrand] = React.useState("");
    const [selectedWheels, setSelectedWheels] = React.useState<string[]>([]);
    const [selectedGearbox, setSelectedGearbox] = React.useState<string[]>([]);
    const [selectedPassengers, setSelectedPassengers] = React.useState<string[]>([]);
    const [selectedDoors, setSelectedDoors] = React.useState<string[]>([]);
    const [selectedColor, setSelectedColor] = React.useState<string[]>([]);
    const [selectedStatus, setSelectedStatus] = React.useState<string[]>([]);
    

    const [searchConditions, setSearchConditions] = React.useState<searchCondition>({} as searchCondition);
    /*function changeSearchCondition({value}: {value: searchCondition}) {

    }*/
    async function search() {
        console.log(document.querySelectorAll('input'));
    }
    function change(e: ChangeEvent<HTMLInputElement>) {
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
    }
    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value, type } = e.target;
        const parsedValue = type === 'number' ? parseFloat(value) : value;
        
        setSearchConditions({
            ...searchConditions,
            [name]: parsedValue
        });
    }
    return (
        <div className="mb-20">
            <Card className="lg:w-80 lg:h-fit border-dashed border-gray-800">
                <CardHeader>

                    <CardTitle className="text-lg font-bold">
                        Keresés
                        <hr className="w-52 h-px bg-slate-400 border-0" />
                    </CardTitle>

                </CardHeader>
                <CardContent>
                    <form>

                        <div className="bg--400">
                            <Collapsible className="hidden lg:block">
                                <CollapsibleTrigger className="text-blue-600 font-bold text-lg hover:text-blue-400">Márka, model, típus</CollapsibleTrigger>
                                
                                <CollapsibleContent className="grid grid-rows-4">
                                <hr className="w-full h-px bg-slate-400 border-0 -mb-40" />
                                <div>

                                <label htmlFor="" className="">Márka <br /> </label> 
                                <BrandCB car_selection={cars} setSelectedBrand={setSelectedBrand}/>

                                </div>
                                <div>

                                <label htmlFor="">Model <br /> </label>
                                <ModelCB car_selection={cars} selectedBrand={selectedBrand}/>
                                
                                </div>
                                
                                </CollapsibleContent>
                            </Collapsible>
                        </div>
                        
                        <hr className="w-full h-px bg-slate-400 border-0" />

                        <div>
                            <Collapsible className="hidden lg:block">
                                <CollapsibleTrigger className="text-blue-600 font-bold text-lg hover:text-blue-400">Alap információk</CollapsibleTrigger>
                                <CollapsibleContent>
                                    <label htmlFor="">Ár</label><br></br>
                                    <input type="number" onChange={(e) => {change(e)}} id="minprice" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                    <input type="number" onChange={(e) => {change(e)}} id="maxprice" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    <br></br>
                                    <label htmlFor="">Kilométer</label><br></br>
                                    <input type="number" onChange={(e) => {change(e)}} id="minkm" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                    <input type="number" onChange={(e) => {change(e)}} id="maxkm" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    <br></br>
                                    <label htmlFor="">Évjárat</label><br></br>
                                    <input type="number" onChange={(e) => {change(e)}} id="minyear" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                    <input type="number" onChange={(e) => {change(e)}} id="maxyear" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    <br></br>
                                    <label htmlFor="">Súly</label><br></br>
                                    <input type="number" onChange={(e) => {change(e)}} id="minweight" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                    <input type="number" onChange={(e) => {change(e)}} id="maxweight" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    <br></br>
                                    <label htmlFor="">Köbcenti</label><br></br>
                                    <input type="number" onChange={(e) => {change(e)}} id="mincc" name="price" className="border lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                    <input type="number" onChange={(e) => {change(e)}} id="maxcc" name="price" className="border lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    <br></br>
                                    <label htmlFor="">Lóerő</label><br></br>
                                    <input type="number" onChange={(e) => {change(e)}} id="minhp" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                    <input type="number" onChange={(e) => {change(e)}} id="maxhp" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    <br></br>
                                    <label htmlFor="">Kerékmeghajtás</label><br></br>
                                        <input type="checkbox" name="" id="wheels.fwd" onChange={(e) => {change(e)}}></input>
                                        <input type="checkbox" name="" id="wheels.rwd"></input>
                                        <input type="checkbox" name="" id="wheels.awd"></input> 
                                        <input type="checkbox" name="" id="wheels.4wd"></input>
                                    <br></br>
                                    <label htmlFor="">Gearbox</label><br></br>
                                        <input type="checkbox" name="" id="gearbox.manual"></input>
                                        <input type="checkbox" name="" id="gearbox.automatic"></input>
                                    <br></br>
                                    <label htmlFor="">Passengers</label><br></br>
                                    <input type="number" onChange={(e) => {change(e)}} id="minpassengers" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                    <input type="number" onChange={(e) => {change(e)}} id="maxpassengers" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    <br></br>
                                    <label htmlFor="">Ajtók</label><br></br>
                                    <input type="number" onChange={(e) => {change(e)}} id="mindoors" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                                    <input type="number" onChange={(e) => {change(e)}} id="maxdoors" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                                    <br></br>
                                    <label htmlFor="">Állapot</label><br></br>
                                    
                                    <br></br>
                                </CollapsibleContent>
                            </Collapsible>
                        </div>

                        <div className="bg-green-400">
                            <Collapsible className="hidden lg:block">
                                <CollapsibleTrigger>Group 03</CollapsibleTrigger>
                                <CollapsibleContent>
                                    ------Content #1 <br />
                                    ------Content #2 <br />
                                    ------Content #3 <br />
                                    ------Content #4 <br />
                                    ------Content #5 <br />
                                    ------Content #6 <br />
                                </CollapsibleContent>
                            </Collapsible>
                        </div>

                        <div className="bg-yellow-400">
                            <Collapsible className="hidden lg:block">
                                <CollapsibleTrigger>Group 04</CollapsibleTrigger>
                                <CollapsibleContent>
                                    ------Content #1 <br />
                                    ------Content #2 <br />
                                    ------Content #3 <br />
                                    ------Content #4 <br />
                                    ------Content #5 <br />
                                    ------Content #6 <br />
                                </CollapsibleContent>
                            </Collapsible>
                        </div>

                        <div className="bg-cyan-400">
                            <Collapsible className="hidden lg:block">
                                <CollapsibleTrigger>Group 05</CollapsibleTrigger>
                                <CollapsibleContent>
                                    ------Content #1 <br />
                                    ------Content #2 <br />
                                    ------Content #3 <br />
                                    ------Content #4 <br />
                                    ------Content #5 <br />
                                    ------Content #6 <br />
                                </CollapsibleContent>
                            </Collapsible>
                        </div>
                        <input type="submit" value="asdasd" onClick={(e) => {e.preventDefault();console.log(e);}} />
                    </form>
                    {/*lg end*/}


                    <div className="grid grid-rows-2">
                        <button type="button" className="bg-slate-300" onClick={async () => {await search();}}>Keresés</button>
                        <div className="row-"></div>
                    </div>

                </CardContent>
                <CardFooter className="text-xs text-muted-foreground" >
                    <p>© 2025 Körpörgő Autókereskedés™.</p>
                </CardFooter>
            </Card>
            <label htmlFor="">Lóerő</label><br></br>
            <CB selection={[]} setter={setSelectedWheels}/>         
            <br></br>
        </div>
    )
}