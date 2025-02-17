import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BrandCB } from "@/components/BrandCB";
import { ModelCB } from "@/components/ModelCB";
import { Input } from "@/components/ui/input";
import { DrivetypeCB } from "@/components/DriveTypeCB";
import { ConditionCB } from "@/components/ConditionCB";
import { Bug } from "lucide-react";
import { Textarea } from "@/components/TextArea";

export default function Page() {
    return (
        <div>
            <Header />
            <div className="h-fit ml-72 mr-72 border-2 border-cyan-500 rounded-xl  mt-14">
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
                            <div className="col-2 row-1 -ml-5">
                                <BrandCB />
                            </div>
                            <div className="col-1 row-2 ml-5 mt-1">
                                Model:
                            </div>
                            <div className="col-2 row-2 -ml-5">
                                <ModelCB />
                            </div>

                            {/*benya*/}
                            <div className="col-1 row-3">
                                <h1 className="">Üzemanyag</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-40 ml-4">
                                    <input type="radio" name="fuel" id="gas" />
                                    <label htmlFor="gas">Benzin</label>
                                    <input type="radio" name="fuel" id="diesel" className="ml-5" />
                                    <label htmlFor="diesel">Dízel</label>
                                </div>
                            </div>
                            {/*benya vége*/}

                            {/*km*/}
                            <div className="col-2 row-3">
                                <h1 className="display: inline font-semibold">Kilóméter </h1><h1 className="display: inline">óra állás</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*km vége*/}

                            {/*ár*/}
                            <div className="col-span-2 row-4">
                                <h1 className="display: inline">Kívánt ár </h1><h1 className="display inline font-semibold">(Ft)</h1>
                                <hr className="w-96 h-px bg-slate-400 border-0" />
                                <div className="w-fit">
                                    <input type="text" className="mt-1 ml-5 w-[312px] border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
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
                    <div className="col-2 row-start-2 ml-5 -mt-10 ">
                        <div className="grid grid-cols-2 grid-rows-7">

                            {/*col-1*/}
                            {/*év*/}
                            <div className="col-1 row-1 mb-3">
                                <h1 className="display: inline ">Gyártási </h1><h1 className="display: inline font-semibold">év</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*év vége*/}

                            {/*allapot*/}
                            <div className="col-1 row-2 mb-3">
                                <h1 className="display: inline ">Autó állapota</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-9">
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
                                        <input type="radio" name="gb" id="manual" />
                                        <label htmlFor="manual" className="text-xs">Manuális</label>
                                        <input type="radio" name="gb" id="auto" className="ml-5" />
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
                        <div className="-mt-14">
                            <h1 className="display: inline ">Hirdetés leírása</h1>
                            <hr className="w-[363px] h-px bg-slate-400 border-0" />
                            <div className="w-[340px] h-[200px] mt-3 ml-3 mr-3 border-2  border-gray-300 rounded-md">
                                <Textarea />
                            </div>
                        </div>
                        {/*desc end*/}
                    </div>
                    {/*col-2 end*/}

                    {/*col-3*/}
                    <div className="col-3 row-start-2 ml-5 -mt-10">
                        {/*features*/}
                        <div className="col-start-2">
                            <h1 className="display: inline ">Felszereltség</h1>
                            <hr className="w-80 h-px bg-slate-400 border-0" />

                            <div className="grid grid-cols-2 grid-rows-4">
                                {/*külsö*/}
                                <div className="col-1 row-1">
                                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Külső felszereltség</h3>
                                    <ul className="w-32 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">DUAL_REAR_WHEELS</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="react-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">DISABILITY_EQUIPPED</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="angular-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">TRAILER_HITCH</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">ROOF_RACK</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs  text-gray-900 dark:text-gray-300">PREMIUM_WHEELS</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/*külsö end*/}

                                {/*belső*/}
                                <div className="col-1 row-start-2 -mt-40">
                                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Belső felszereltség</h3>
                                    <ul className="w-32 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">APPLE_CARPLAY</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="react-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">ANDROID_AUTO</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="angular-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">LEATHER_SEATS</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">HEATED_SEATS</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">THIRD_ROW_SEATS</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">SUNROOF</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">NAVIGATION</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">HEATED_SEATS</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">WIFI_HOTSPOT</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">HEAD_UP_DISPLAY</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">STEERING_WHEEL_CONTROLS</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/*belső end*/}

                                {/*kénylemi*/}
                                <div className="-ml-7 col-2 row-1">
                                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Kénylemi felszereltség</h3>
                                    <ul className="w-32 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">CRUISE_CONTROL</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="react-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">ADAPTIVE_CRUISE_CONTROL</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="angular-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">REMOTE_ENGINE_START</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">KEYLESS_START</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">RAIN_SENSING_WIPERS</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">AUTOMATIC_PARKING</label>
                                            </div>
                                        </li>


                                    </ul>
                                </div>
                                {/*kénylemi end*/}

                                {/*biztonság*/}
                                <div className="-ml-7 col-2 -mt-32">
                                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Biztonság</h3>
                                    <ul className="w-32 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">KEYLESS_ENTRY</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="react-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">AUTOMATIC_PARKING</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="angular-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">ESP</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">ABS</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">NIGHT_VISION</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">BACKUP_CAMERA</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">LANE_DEPARTURE_WARNING</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">BLIND_SPOT_MONITOR</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">CROSS_TRAFFIC_ALERT</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">BRAKE_ASSIST</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">SECURITY_SYSTEM</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">LANE_KEEPING_ASSIST</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">TPMS</label>
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                {/*biztonság end*/}

                                {/*audio*/}
                                <div className="col-1 -mt-16">
                                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">Hifi/Hangredszer</h3>
                                    <ul className="w-32 text-sm text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="vue-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="vue-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">BLUETOOTH_HANDS_FREE</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="react-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">DVD_PLAYER</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="angular-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="angular-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">PORTABLE_AUDIO_CONNECTION</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="laravel-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="laravel-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">PREMIUM_AUDIO</label>
                                            </div>
                                        </li>
                                        <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                                            <div className="flex items-center ps-3">
                                                <input id="react-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                                <label htmlFor="react-checkbox" className="w-full py-3 ms-2 text-xs text-gray-900 dark:text-gray-300">SATELLITE_RADIO</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/*audio end*/}
                            </div>

                        </div>
                        {/*features vége*/}
                    </div>
                    {/*col-3 end*/}

                </div>
                <button type="submit"> <Bug /> </button>
            </div>
            <Footer />
        </div>
    )
}