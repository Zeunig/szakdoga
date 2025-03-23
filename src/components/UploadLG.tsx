"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BrandCB } from "@/components/BrandCB";
import { ModelCB } from "@/components/ModelCB";
import { Input } from "@/components/ui/input";
import { DrivetypeCB } from "@/components/DriveTypeCB";
import { ConditionCB } from "@/components/ConditionCB";
import { Bug } from "lucide-react";
import { Textarea } from "@/components/TextArea";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { ISortedCarSelection } from "@/app/jobs/carCounter/route";

import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible"

export default function UploadLG(cars: ISortedCarSelection[]) {

    const [selectedBrand, setSelectedBrand] = React.useState("");

    return (
        <div className="hidden md:inline-block ">
            <div className="ml-2 mr-2 lg:h-fit lg:ml-72 lg:mr-72 border-2 border-blue-600 rounded-xl  mt-14">
                <form action="">
                    <div className="grid lg:grid-cols-3">
                        {/*Cím*/}
                        <div className="row-start-1 col-span-3 mt-5 mb-2 lg:mt-10 lg:mb-20 place-self-center">
                            <div className=" font-bold text-2xl lg:text-3xl">
                                Autó feltöltése
                            </div>
                        </div>
                        {/*Cím vége*/}

                        {/*col-1*/}
                        <div className="ml-2 lg:col-1 bg-blue-50 row-start-2 justify-self-center ">
                            <Collapsible className="">
                                {/*Autó adatok*/}
                                <CollapsibleTrigger className="lg:disabled:collapse">
                                    <h1 className="font-bold lg:w-[434px]">Autó adatok</h1>
                                </CollapsibleTrigger>
                                <hr className="w-full h-px bg-slate-400 border-0" />
                                <CollapsibleContent>


                                    <div className="grid grid-cols-2 grid-rows-4">
                                        <div className="col-1 row-1">
                                            Márka:
                                        </div>
                                        <div className="col-2 row-1 -ml-4">
                                            <BrandCB car_selection={cars} setSelectedBrand={setSelectedBrand} />
                                        </div>
                                        <div className="col-1 row-2">
                                            Model:
                                        </div>
                                        <div className="col-2 row-2 -ml-4">
                                            <ModelCB car_selection={cars} selectedBrand={selectedBrand} />
                                        </div>

                                        {/*benya*/}
                                        <div className="col-1 row-3">
                                            <h1 className="">Üzemanyag</h1>
                                            <hr className="w-40 h-px bg-slate-400 border-0" />
                                            <div className="w-40 ml-4">
                                                <input type="radio" name="fuel" id="gas" required />
                                                <label htmlFor="gas">Benzin</label>
                                                <input type="radio" name="fuel" id="diesel" className="ml-5" required />
                                                <label htmlFor="diesel">Dízel</label>
                                            </div>
                                        </div>
                                        {/*benya vége*/}

                                        {/*km*/}
                                        <div className="col-2 row-3">
                                            <h1 className="display: inline font-semibold">Kilóméter </h1><h1 className="display: inline">óra állás</h1>
                                            <hr className="w-40 h-px bg-slate-400 border-0" />
                                            <div className="w-10">
                                                <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" required />
                                            </div>
                                        </div>
                                        {/*km vége*/}

                                        {/*ár*/}
                                        <div className="col-span-2 row-4">
                                            <h1 className="display: inline">Kívánt ár </h1><h1 className="display inline font-semibold">(Ft)</h1>
                                            <hr className="w-full h-px bg-slate-400 border-0" />
                                            <div className="w-fit">
                                                <input type="text" className="mt-1 ml-5 w-[312px] border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" required />
                                            </div>
                                        </div>
                                        {/*ár vége*/}

                                    </div>
                                    {/*Autó adatok vége*/}

                                    {/*kép*/}
                                    <h1 className="font-bold mt-5">Kép Feltöltése</h1>
                                    <hr className="w-full h-px bg-slate-400 border-0" />
                                    <div className="w-92 mt-2 place-self-center">
                                        <input className="block w-full text-sm text-gray-900 border-2 border-gray-400 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                                    </div>
                                    {/*kép vége*/}
                                </CollapsibleContent>
                            </Collapsible>

                        </div>

                        {/*col-1 end*/}

                        {/*col-2*/}
                        <div className="hidden lg:block lg:col-2 row-start-2 ml-5 -mt-10 ">
                            <div className="grid grid-cols-2 grid-rows-7">

                                {/*col-1*/}
                                {/*év*/}
                                <div className="col-1 row-1 mb-3">
                                    <h1 className="display: inline ">Gyártási </h1><h1 className="display: inline font-semibold">év</h1>
                                    <hr className="w-40 h-px bg-slate-400 border-0" />
                                    <div className="w-10">
                                        <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" required />
                                    </div>
                                </div>
                                {/*év vége*/}

                                {/*allapot*/}
                                <div className="col-1 row-2 mb-3">
                                    <h1 className="display: inline ">Autó állapota</h1>
                                    <hr className="w-40 h-px bg-slate-400 border-0" />
                                    <div className="w-9" >
                                        <ConditionCB />
                                    </div>
                                </div>
                                {/*allapot vége*/}

                                {/*hp*/}
                                <div className="col-1 row-4 mb-3">
                                    <h1 className="display: inline ">Teljesítmény </h1><h1 className="display: inline font-semibold">(le)</h1>
                                    <hr className="w-40 h-px bg-slate-400 border-0" />
                                    <div className="w-10">
                                        <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                    </div>
                                </div>
                                {/*hp vége*/}

                                {/*hajtás*/}
                                <div className="col-1 row-5 mb-3">
                                    <h1 className="display: inline ">Hajtás </h1>
                                    <hr className="w-40 h-px bg-slate-400 border-0" />
                                    <div className="w-10">
                                        <DrivetypeCB />
                                    </div>
                                </div>
                                {/*hajtás vége*/}

                                {/*gb*/}
                                <div className="col-1 row-6 mb-3">
                                    <h1 className="display: inline ">Váltó fajtálya </h1>
                                    <hr className="w-40 h-px bg-slate-400 border-0" />
                                    <div className="w-10">
                                        <div className="w-40 ">
                                            <input type="radio" name="gb" id="manual" required />
                                            <label htmlFor="manual" className="text-xs">Manuális</label>
                                            <input type="radio" name="gb" id="auto" className="ml-5" required />
                                            <label htmlFor="auto" className="text-xs">Autómata</label>
                                        </div>
                                    </div>
                                </div>
                                {/*gb vége*/}

                                {/*utas*/}
                                <div className="col-1  row-7">
                                    <h1 className="display: inline ">Szállytható utasok  </h1><h1 className="display: inline font-semibold">száma</h1>
                                    <hr className="w-40 h-px bg-slate-400 border-0" />
                                    <div className="w-10">
                                        <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                    </div>
                                </div>
                                {/*utas vége*/}

                                {/*col-1 end*/}

                                {/*col-2*/}
                                {/*kg*/}
                                <div className="col-2 row-1">
                                    <h1 className="display: inline ">Gépjárjmű súlya</h1><h1 className="display: inline font-semibold">(kg)</h1>
                                    <hr className="w-40 h-px bg-slate-400 border-0" />
                                    <div className="w-10">
                                        <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                    </div>
                                </div>
                                {/*kg vége*/}

                                {/*cc*/}
                                <div className="col-2 row-2">
                                    <h1 className="display: inline ">Moror űrtartalma </h1><h1 className="display: inline font-semibold">(cm3)</h1>
                                    <hr className="w-40 h-px bg-slate-400 border-0" />
                                    <div className="w-10">
                                        <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                    </div>
                                </div>
                                {/*cc vége*/}

                                {/*ajto*/}
                                <div className="col-2 row-3">
                                    <h1 className="display: inline ">Ajtók </h1><h1 className="display: inline font-semibold">száma</h1>
                                    <hr className="w-40 h-px bg-slate-400 border-0" />
                                    <div className="w-10">
                                        <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                    </div>
                                </div>
                                {/*ajto vége*/}

                                {/*szin*/}
                                <div className="col-2 row-4">
                                    <h1 className="display: inline ">Autó </h1><h1 className="display: inline font-semibold">színe</h1>
                                    <hr className="w-40 h-px bg-slate-400 border-0" />
                                    <div className="w-10">
                                        <input type="text" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                    </div>
                                </div>
                                {/*szin vége*/}

                                {/*col-2 end*/}


                            </div>
                            {/*desc*/}
                            <div className="-mt-32">
                                <h1 className="display: inline ">Hirdetés leírása</h1>
                                <hr className="w-[363px] h-px bg-slate-400 border-0" />
                                <div className="w-[340px] h-[200px] mt-3 ml-3 mr-3">
                                    <Textarea />
                                </div>
                            </div>
                            {/*desc end*/}

                            <button className=" mb-3 lg:ml-28 mt-10 h-10 bg-blue-600 w-40 text-white rounded-lg transform transition duration-250 hover:scale-110 hover:bg-blue-400">Hirdetés feladása</button>

                        </div>
                        {/*col-2 end*/}

                        {/*col-3*/}
                        <div className="hidden col-3 row-start-2 ml-5 -mt-10">


                        </div>
                        {/*col-3 end*/}

                    </div>
                </form>
            </div>

        </div>
    )
}