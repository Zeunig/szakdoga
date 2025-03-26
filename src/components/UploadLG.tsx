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
import React, { BaseSyntheticEvent, ChangeEvent } from "react";
import { ISortedCarSelection } from "@/app/jobs/carCounter/route";

import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible"
import { PublishInterface } from "@/app/api/marketplace/publish/route";
import { Card } from "./ui/card";
import axios from "axios";

export default function UploadLG(cars: ISortedCarSelection[]) {

    const [selectedBrand, setSelectedBrand] = React.useState("");

    const [carDetails, setCarDetails] = React.useState<PublishInterface>({
        brand: "",
        model: "",
        price: 0,
        year: 0,
        mileage: 0,
        weight: 0,
        horsepower: 0,
        cc: 0,
        fuel_type: "",
        gearbox: "",
        drive_type: "",
        condition: "",
        doors: 0,
        passengers: 0,
        color: "",
        features: 0,
        vin: "",
        design: "",
        description: "",
        images: []
    });

    function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value, type } = e.target;
        const parsedValue = type === 'number' ? parseFloat(value) : value;

        setCarDetails({
            ...carDetails,
            [name]: parsedValue
        });
        console.log(carDetails);
    }
    function handleCheckbox(e: ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = e.target;
        const parsedValue = value === 'on' ? true : false;
        const category = name.split(".")[0];
        const parsedItem = name.split(".")[1];
        console.log(checked);
        if (checked) {
            setCarDetails({
                ...carDetails,
                "features": carDetails.features + parseInt(value)
            });
        } else {
            setCarDetails({
                ...carDetails,
                "features": carDetails.features - parseInt(value)
            });
        }

        console.log(carDetails);
    }
    function handleChange(value: string, type: string) {
        setCarDetails({
            ...carDetails,
            [type]: value
        });
    }
    function handleRadio(e: ChangeEvent<HTMLInputElement>) {
        const { name, value, type, checked } = e.target;
        console.log(checked);
        setCarDetails({
            ...carDetails,
            [name]: value
        });

        console.log(carDetails);
    }
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
    async function upload(e: BaseSyntheticEvent) {
        e.preventDefault();
        axios.post("/api/marketplace/publish", carDetails).then((res) => {
            if(res.status == 200) {
                window.location.href = `/cars/${res.data["car_id"]}`
            }else {
                alert('Valami hiba történt'); // TODO 
            }
        });
    }
    return (
        <div className="hidden md:block md:mx-2 h-fit w-fit border-2 border-blue-600 rounded-xl  mt-14 place-self-center mb-20">
            <form onSubmit={async (e) => {await upload(e)}}>
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
                                <input onChange={(e) => { handleInputChange(e) }} type="text" name="brand" id="brand" className="kekb mt-2 w-full"/>
                            </div>
                            <div className="col-1 row-2 ml-5 mt-1">
                                Model:
                            </div>
                            <div className="col-2 row-2 -ml-5">
                                 <input onChange={(e) => { handleInputChange(e) }} type="text" name="model" id="model" className="kekb mt-2 w-full"/>
                            </div>

                            {/*benya*/}
                            <div className="col-1 row-3">
                                <h1 className="">Üzemanyag</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-40 ml-4">
                                    <input onChange={(e) => { handleRadio(e) }} type="radio" name="fuel_type" id="gas" value="Benzin" hidden={false/*required*/} />
                                    <label htmlFor="gas">Benzin</label>
                                    <input onChange={(e) => { handleRadio(e) }} type="radio" name="fuel_type" id="gas" value="Dízel" className="ml-5" hidden={false/*required*/} />
                                    <label htmlFor="diesel">Dízel</label>
                                    <input onChange={(e) => { handleRadio(e) }} type="radio" name="fuel_type" id="gas" value="Hibrid" className="ml-5" hidden={false/*required*/} />
                                    <label htmlFor="diesel">Hibrid</label>
                                    <input onChange={(e) => { handleRadio(e) }} type="radio" name="fuel_type" id="gas" value="Elektromos" className="ml-5" hidden={false/*required*/} />
                                    <label htmlFor="diesel">Elektromos</label>
                                    <input onChange={(e) => { handleRadio(e) }} type="radio" name="fuel_type" id="gas" value="Etanol" className="ml-5" hidden={false/*required*/} />
                                    <label htmlFor="diesel">Etanol</label>
                                    <input onChange={(e) => { handleRadio(e) }} type="radio" name="fuel_type" id="gas" value="Biodízel" className="ml-5" hidden={false/*required*/} />
                                    <label htmlFor="diesel">Biodízel</label>
                                    <input onChange={(e) => { handleRadio(e) }} type="radio" name="fuel_type" id="gas" value="Gáz" className="ml-5" hidden={false/*required*/} />
                                    <label htmlFor="diesel">Gáz</label>
                                </div>
                            </div>
                            {/*benya vége*/}

                            {/*km*/}
                            <div className="col-2 row-3">
                                <h1 className="display: inline font-semibold">Kilóméter </h1><h1 className="display: inline">óra állás</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input onChange={(e) => { handleInputChange(e) }} type="number" name="mileage" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" hidden={false/*required*/} />
                                </div>
                            </div>
                            {/*km vége*/}

                            {/*ár*/}
                            <div className="col-span-2 row-4">
                                <h1 className="display: inline">Kívánt ár </h1><h1 className="display inline font-semibold">(Ft)</h1>
                                <hr className="w-96 h-px bg-slate-400 border-0" />
                                <div className="w-fit">
                                    <input onChange={(e) => { handleInputChange(e) }} type="number" name="price" className="mt-1 ml-5 w-[312px] border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" hidden={false/*required*/} />
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
                                    <input onChange={(e) => { handleInputChange(e) }} type="number" name="year" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" hidden={false/*required*/} />
                                </div>
                            </div>
                            {/*év vége*/}

                            {/*allapot*/}
                            <div className="col-1 row-2 mb-3">
                                <h1 className="display: inline ">Autó állapota</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-9" >
                                    <ConditionCB onInputChange={handleChange}/>
                                </div>
                            </div>
                            {/*allapot vége*/}

                            {/*hp*/}
                            <div className="col-1 row-4 mb-3">
                                <h1 className="display: inline ">Teljesítmény </h1><h1 className="display: inline font-semibold">(le)</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input onChange={(e) => { handleInputChange(e) }} type="number" name="horsepower" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*hp vége*/}

                            {/*hajtás*/}
                            <div className="col-1 row-5 mb-3">
                                <h1 className="display: inline ">Hajtás </h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <DrivetypeCB onInputChange={handleChange}/>
                                </div>
                            </div>
                            {/*hajtás vége*/}

                            {/*gb*/}
                            <div className="col-1 row-6 mb-3">
                                <h1 className=" inline ">Váltó fajtálya </h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <div className="w-40 ">
                                        <input onChange={(e) => { handleRadio(e) }} type="radio" name="gearbox" id="Manuális" value="Manuális" hidden={false/*required*/} />
                                        <label htmlFor="manual" className="text-xs">Manuális</label>
                                        <input onChange={(e) => { handleRadio(e) }} type="radio" name="gearbox" id="Automata" value="Automata" className="ml-5" hidden={false/*required*/} />
                                        <label htmlFor="auto" className="text-xs">Automata</label>
                                    </div>
                                </div>
                            </div>
                            {/*gb vége*/}

                            {/*utas*/}
                            <div className="col-1  row-7">
                                <h1 className=" inline ">Szállytható utasok  </h1><h1 className=" inline font-semibold">száma</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input onChange={(e) => { handleInputChange(e) }} type="number" name="passengers" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
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
                                    <input onChange={(e) => { handleInputChange(e) }} type="number" name="weight" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*kg vége*/}

                            {/*cc*/}
                            <div className="col-2 row-2">
                                <h1 className=" inline ">Moror űrtartalma </h1><h1 className=" inline font-semibold">(cm3)</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input onChange={(e) => { handleInputChange(e) }} type="number" name="cc" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*cc vége*/}

                            {/*ajto*/}
                            <div className="col-2 row-3">
                                <h1 className="inline ">Ajtók </h1><h1 className="inline font-semibold">száma</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input onChange={(e) => { handleInputChange(e) }} type="number" name="doors" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*ajto vége*/}

                            {/*szin*/}
                            <div className="col-2 row-4">
                                <h1 className=" inline ">Autó </h1><h1 className=" inline font-semibold">színe</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input onChange={(e) => { handleInputChange(e) }} type="text" name="color" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
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
                            <input type="submit" className="hvr-grow border-2 border-blue-600 rounded-xl upload-button" onSubmit={async (e) => {await upload(e)}} value="Hirdetés feladáaasa" />
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
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:DUAL_REAR_WHEELS" type="checkbox" value="16" className="" />
                                                        <label htmlFor="DUAL_REAR_WHEELS" className="w-full py-3 ms-2 text-xs text-gray-900 ">Duppla házsó kerék</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:DISABILITY_EQUIPPED" type="checkbox" value="32" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 " />
                                                        <label htmlFor="DISABILITY_EQUIPPED" className="w-full py-3 ms-2 text-xs text-gray-900 ">DISABILITY_EQUIPPED</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:TRAILER_HITCH" type="checkbox" value="8" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 " />
                                                        <label htmlFor="TRAILER_HITCH" className="w-full py-3 ms-2 text-xs text-gray-900 ">Vonóhorog</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:ROOF_RACK" type="checkbox" value="4" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 " />
                                                        <label htmlFor="ROOF_RACK" className="w-full py-3 ms-2 text-xs text-gray-900 ">Tető csomagtartó</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300 ">
                                                    <div className="flex items-center ps-3 checked:border-2 checked:border-blue-500">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:PREMIUM_WHEELS" type="checkbox" value="2" className="  w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500  " />
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
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:APPLE_CARPLAY" type="checkbox" value="128" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="APPLE_CARPLAY" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Apple Carplay</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:ANDROID_AUTO" type="checkbox" value="64" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="ANDROID_AUTO" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Android Auto</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:LEATHER_SEATS" type="checkbox" value="33554432" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="LEATHER_SEATS" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Bőr belső</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:HEATED_SEATS" type="checkbox" value="16777216" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="HEATED_SEATS" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Fűthető ülések</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:THIRD_ROW_SEATS" type="checkbox" value="8388608" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="THIRD_ROW_SEATS" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Harmadik ülés sorss</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:SUNROOF" type="checkbox" value="67108864" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="SUNROOF" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Tetőablak</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:NAVIGATION" type="checkbox" value="2048" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="NAVIGATION" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Navi</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:WIFI_HOTSPOT" type="checkbox" value="4194304" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="WIFI_HOTSPOT" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">WIFI Hotspot</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:HEAD_UP_DISPLAY" type="checkbox" value="262144" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="HEAD_UP_DISPLAY" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">HUD</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:STEERING_WHEEL_CONTROLS" type="checkbox" value="32768" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
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
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:CRUISE_CONTROL" type="checkbox" value="512" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="CRUISE_CONTROL" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Tempómat</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:ADAPTIVE_CRUISE_CONTROL" type="checkbox" value="131072" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="ADAPTIVE_CRUISE_CONTROL" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Adaptív tempómat</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:REMOTE_ENGINE_START" type="checkbox" value="65536" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="REMOTE_ENGINE_START" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Távoli indítás</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:KEYLESS_START" type="checkbox" value="1048576" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="KEYLESS_START" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Kulcsnélküli indítás</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:RAIN_SENSING_WIPERS" type="checkbox" value="524288" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="RAIN_SENSING_WIPERS" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Eső érzékelő</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:AUTOMATIC_PARKING" type="checkbox" value="2097152" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
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
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:KEYLESS_ENTRY" type="checkbox" value="1" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="KEYLESS_ENTRY" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Kulcsmentes nyitás</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:ESP" type="checkbox" value="137438953472" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="ESP" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">ESP</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:ABS" type="checkbox" value="68719476736" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="ABS" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">ABS</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:NIGHT_VISION" type="checkbox" value="268435456" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="NIGHT_VISION" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Éjjellátó</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:BACKUP_CAMERA" type="checkbox" value="134217728" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="BACKUP_CAMERA" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Tolató kamera</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:LANE_DEPARTURE_WARNING" type="checkbox" value="536870912" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="LANE_DEPARTURE_WARNING" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Sávelhagyás figyelmeztető</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:BLIND_SPOT_MONITOR" type="checkbox" value="1073741824" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="BLIND_SPOT_MONITOR" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Holttér figyelő</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:CROSS_TRAFFIC_ALERT" type="checkbox" value="2147483648" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="CROSS_TRAFFIC_ALERT" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">CROSS_TRAFFIC_ALERT</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:BRAKE_ASSIST" type="checkbox" value="4294967296" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="BRAKE_ASSIST" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Fék rásegítés</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:SECURITY_SYSTEM" type="checkbox" value="8589934592" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="SECURITY_SYSTEM" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Lopásgátló</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:LANE_KEEPING_ASSIST" type="checkbox" value="17179869184" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="LANE_KEEPING_ASSIST" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Autómata sávtartás</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:TPMS" type="checkbox" value="34359738368" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
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
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:BLUETOOTH_HANDS_FREE" type="checkbox" value="256" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="BLUETOOTH_HANDS_FREE" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Bluetooth</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:DVD_PLAYER" type="checkbox" value="1024" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="DVD_PLAYER" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">DVD lejátszó</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:PREMIUM_AUDIO" type="checkbox" value="8192" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                        <label htmlFor="PREMIUM_AUDIO" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">Felsőkategóriás hifi</label>
                                                    </div>
                                                </li>
                                                <li className="w-full border-2  border-gray-300">
                                                    <div className="flex items-center ps-3">
                                                        <input onChange={(e) => { handleCheckbox(e) }} id="feature:SATELLITE_RADIO" type="checkbox" value="16384" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-400 rounded-sm " />
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