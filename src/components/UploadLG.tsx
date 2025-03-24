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


    async function buyFeature() {
        fetch(`${location.protocol}//${window.location.host}/api/pay`, {
            method: "POST",
            redirect: "follow",
            body: JSON.stringify(
                {
                    "product_id": 1,
                    "car_id": document.getElementById("carid")?.nodeValue
                }
            )
        })
            .then(res => res.json()).then(json => window.location.href = json["redirect"]);
    }
    return (
        <div className="hidden md:block md:mx-2 h-fit w-fit border-2 border-blue-600 rounded-xl  mt-14 place-self-center mb-20">
            <form action="">
                <div className="grid grid-cols-3">
                    {/*Cím*/}
                    <div className="grid grid-cols-5 row-start-1 col-start-2 mt-10 mb-20">
                        <div className="col-start-2 col-span-5 place-content-center font-bold text-2xl">
                            Autó feltöltése
                        </div>
                    </div>
                    {/*Cím vége*/}

                    {/*col-1*/}
                    <div className="col-1 row-start-2 ml-5 -mt-10 ">
                        {/*Autó adatok*/}
                        <h1 className="font-bold ">Autó adatok</h1>
                        <hr className="w-96 h-px bg-slate-400 border-0" />
                        <div className="grid grid-cols-2 grid-rows-4">
                            <div className="col-1 row-1 ml-5 mt-1">
                                Márka:
                            </div>
                            <div className="col-2 row-1">
                                <input type="text" name="" id="" className="kekb mt-2 w-full"/>
                            </div>
                            <div className="col-1 row-2 ml-5 mt-1">
                                Model:
                            </div>
                            <div className="col-2 row-2 -ml-5">
                                 <input type="text" name="" id="" className="kekb mt-2 w-full"/>
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
                                <hr className="w-96 h-px bg-slate-400 border-0" />
                                <div className="w-fit">
                                    <input type="text" className="mt-1 ml-5 w-[312px] border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" required />
                                </div>
                            </div>
                            {/*ár vége*/}

                        </div>
                        {/*Autó adatok vége*/}

                        {/*kép*/}
                        <h1 className="font-bold mt-5">Kép Feltöltése</h1>
                        <hr className="w-96 h-px bg-slate-400 border-0" />
                        <div className="w-92 ml-5 mt-3 mr-7">
                            <input className="block w-full text-sm text-gray-900 border-2 border-gray-400 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />
                        </div>
                        {/*kép vége*/}


                    </div>
                    {/*col-1 end*/}

                    {/*col-2*/}
                    <div className=" col-2 row-start-2 ml-5 -mt-10 ">
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
                                <h1 className=" inline ">Váltó fajtálya </h1>
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
                                <h1 className=" inline ">Szállytható utasok  </h1><h1 className=" inline font-semibold">száma</h1>
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
                                <h1 className=" inline ">Gépjárjmű súlya</h1><h1 className=" inline font-semibold">(kg)</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*kg vége*/}

                            {/*cc*/}
                            <div className="col-2 row-2">
                                <h1 className=" inline ">Moror űrtartalma </h1><h1 className=" inline font-semibold">(cm3)</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*cc vége*/}

                            {/*ajto*/}
                            <div className="col-2 row-3">
                                <h1 className="inline ">Ajtók </h1><h1 className="inline font-semibold">száma</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*ajto vége*/}

                            {/*szin*/}
                            <div className="col-2 row-4">
                                <h1 className=" inline ">Autó </h1><h1 className=" inline font-semibold">színe</h1>
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
                            <h1 className="inline">Hirdetés leírása</h1>
                            <hr className="w-[363px] h-px bg-slate-400 border-0" />
                            <div className="w-[340px] h-[200px] mt-3 ml-3 mr-3">
                                <Textarea />
                            </div>
                        </div>
                        {/*desc end*/}

                        {/*gombok*/}
                        <div className="grid grid-cols-2 gap-3 items-center">
                            <button className="hvr-grow border-2 border-blue-600 rounded-xl upload-button">Hirdetés feladása</button>

                            <span className="relative flex hvr-grow">
                                <button className="border-2 border-blue-600 rounded-xl  w-[160px] h-[52px] upload-button" onClick={buyFeature}>Kiemelés Vásárlása</button>
                                <span className="absolute inline-flex size-4 animate-ping rounded-full bg-orange-500 opacity-75 right-4 top-1"/>
                                <span className="relative inline-flex size-4 rounded-full bg-orange-500 right-2 -top-5"/>
                            </span>
                        </div>
                        {/*gombok vége*/}

                    </div>
                    {/*col-2 end*/}

                    {/*col-3*/}
                    <div className="col-3 row-start-2 ml-5 -mt-10">

                        {/*features*/}
                        <div className="col-start-2">
                            <h1 className="text-blue-600 font-bold">Felszereltség</h1>
                            <hr className="w-80 h-px bg-slate-400 border-0 mb-3" />

                            <div className="h-[100px] ">
                                <ScrollArea className="h-[500px]">
                                    <div className="">

                                        {/*külsö*/}
                                        <div className="">
                                            <h3 className=" font-semibold text-gray-900 ">Külső felszereltség</h3>
                                            <hr className="w-80 h-px bg-slate-400 border-0 mb-3" />
                                            <ul className="w-32 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg ">
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="DUAL_REAR_WHEELS" type="checkbox" value="DUAL_REAR_WHEELS" className="" />
                                                        <label htmlFor="DUAL_REAR_WHEELS" className="w-full py-3 ms-2 text-xs text-gray-900 ">Duppla házsó kerék</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="DISABILITY_EQUIPPED" type="checkbox" value="DISABILITY_EQUIPPED" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 " />
                                                        <label htmlFor="DISABILITY_EQUIPPED" className="w-full py-3 ms-2 text-xs text-gray-900 ">DISABILITY_EQUIPPED</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="TRAILER_HITCH" type="checkbox" value="TRAILER_HITCH" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 " />
                                                        <label htmlFor="TRAILER_HITCH" className="w-full py-3 ms-2 text-xs text-gray-900 ">Vonóhorog</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="ROOF_RACK" type="checkbox" value="ROOF_RACK" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 " />
                                                        <label htmlFor="ROOF_RACK" className="w-full py-3 ms-2 text-xs text-gray-900 ">Tető csomagtartó</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300 ">
                                                    <div className="flex items-center ps-3 checked:border-2 checked:border-blue-500">
                                                        <input id="PREMIUM_WHEELS" type="checkbox" value="PREMIUM_WHEELS" className="  w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500  " />
                                                        <label htmlFor="PREMIUM_WHEELS" className="w-full py-3 ms-2 text-xs  text-gray-900 dark:text-gray-300">Prémium felnik</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*külsö end*/}

                                        {/*belső*/}
                                        <div className="">
                                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Belső felszereltség</h3>
                                            <ul className="w-32 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="APPLE_CARPLAY" type="checkbox" value="APPLE_CARPLAY" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="APPLE_CARPLAY" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Apple Carplay</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="ANDROID_AUTO" type="checkbox" value="ANDROID_AUTO" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="ANDROID_AUTO" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Android Auto</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="LEATHER_SEATS" type="checkbox" value="LEATHER_SEATS" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="LEATHER_SEATS" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Bőr belső</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="HEATED_SEATS" type="checkbox" value="HEATED_SEATS" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="HEATED_SEATS" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Fűthető ülések</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="THIRD_ROW_SEATS" type="checkbox" value="THIRD_ROW_SEATS" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="THIRD_ROW_SEATS" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Harmadik ülés sorss</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="SUNROOF" type="checkbox" value="SUNROOF" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="SUNROOF" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Tetőablak</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="NAVIGATION" type="checkbox" value="NAVIGATION" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="NAVIGATION" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Navi</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="WIFI_HOTSPOT" type="checkbox" value="WIFI_HOTSPOT" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="WIFI_HOTSPOT" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">WIFI Hotspot</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="HEAD_UP_DISPLAY" type="checkbox" value="HEAD_UP_DISPLAY" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="HEAD_UP_DISPLAY" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">HUD</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="STEERING_WHEEL_CONTROLS" type="checkbox" value="STEERING_WHEEL_CONTROLS" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="STEERING_WHEEL_CONTROLS" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Kormány gombok</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*belső end*/}

                                        {/*kénylemi*/}
                                        <div className="">
                                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Kénylemi felszereltség</h3>
                                            <ul className="w-32 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="CRUISE_CONTROL" type="checkbox" value="CRUISE_CONTROL" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="CRUISE_CONTROL" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Tempómat</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="ADAPTIVE_CRUISE_CONTROL" type="checkbox" value="ADAPTIVE_CRUISE_CONTROL" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="ADAPTIVE_CRUISE_CONTROL" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Adaptív tempómat</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="REMOTE_ENGINE_START" type="checkbox" value="REMOTE_ENGINE_START" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="REMOTE_ENGINE_START" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Távoli indítás</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="KEYLESS_START" type="checkbox" value="KEYLESS_START" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="KEYLESS_START" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Kulcsnélküli indítás</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="RAIN_SENSING_WIPERS" type="checkbox" value="RAIN_SENSING_WIPERS" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="RAIN_SENSING_WIPERS" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Eső érzékelő</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="AUTOMATIC_PARKING" type="checkbox" value="AUTOMATIC_PARKING" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="AUTOMATIC_PARKING" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Autómata parkolás</label>
                                                    </div>
                                                </li>


                                            </ul>
                                        </div>
                                        {/*kénylemi end*/}

                                        {/*biztonság*/}
                                        <div className="">
                                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Biztonság</h3>
                                            <ul className="w-32 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="KEYLESS_ENTRY" type="checkbox" value="KEYLESS_ENTRY" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="KEYLESS_ENTRY" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Kulcsmentes nyitás</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="ESP" type="checkbox" value="ESP" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="ESP" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">ESP</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="ABS" type="checkbox" value="ABS" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="ABS" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">ABS</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="NIGHT_VISION" type="checkbox" value="NIGHT_VISION" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="NIGHT_VISION" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Éjjellátó</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="BACKUP_CAMERA" type="checkbox" value="BACKUP_CAMERA" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="BACKUP_CAMERA" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Tolató kamera</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="LANE_DEPARTURE_WARNING" type="checkbox" value="LANE_DEPARTURE_WARNING" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="LANE_DEPARTURE_WARNING" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Sávelhagyás figyelmeztető</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="BLIND_SPOT_MONITOR" type="checkbox" value="BLIND_SPOT_MONITOR" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="BLIND_SPOT_MONITOR" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Holttér figyelő</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="CROSS_TRAFFIC_ALERT" type="checkbox" value="CROSS_TRAFFIC_ALERT" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="CROSS_TRAFFIC_ALERT" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">CROSS_TRAFFIC_ALERT</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="BRAKE_ASSIST" type="checkbox" value="BRAKE_ASSIST" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="BRAKE_ASSIST" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Fék rásegítés</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="SECURITY_SYSTEM" type="checkbox" value="SECURITY_SYSTEM" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="SECURITY_SYSTEM" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Lopásgátló</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="LANE_KEEPING_ASSIST" type="checkbox" value="LANE_KEEPING_ASSIST" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="LANE_KEEPING_ASSIST" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Autómata sávtartás</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="TPMS" type="checkbox" value="TPMS" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="TPMS" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">TPMS</label>
                                                    </div>
                                                </li>

                                            </ul>
                                        </div>
                                        {/*biztonság end*/}

                                        {/*audio*/}
                                        <div className="">
                                            <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Hifi/Hangredszer</h3>
                                            <ul className="w-32 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="BLUETOOTH_HANDS_FREE" type="checkbox" value="BLUETOOTH_HANDS_FREE" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="BLUETOOTH_HANDS_FREE" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Bluetooth</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="DVD_PLAYER" type="checkbox" value="DVD_PLAYER" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="DVD_PLAYER" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">DVD lejátszó</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="PREMIUM_AUDIO" type="checkbox" value="PREMIUM_AUDIO" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="PREMIUM_AUDIO" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Felsőkategóriás hifi</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input id="SATELLITE_RADIO" type="checkbox" value="SATELLITE_RADIO" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-400 rounded-sm " />
                                                        <label htmlFor="SATELLITE_RADIO" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Műholdas rádió</label>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        {/*audio end*/}
                                    </div>
                                </ScrollArea>
                            </div>
                        </div>
                        {/*features vége*/}
                    </div>
                    {/*col-3 end*/}

                </div>
            </form>
        </div>
    );
}