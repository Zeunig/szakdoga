import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BrandCB } from "@/components/BrandCB";
import { ModelCB } from "@/components/ModelCB";
import { Input } from "@/components/ui/input";
import { DrivetypeCB } from "@/components/DriveTypeCB";
import { ConditionCB } from "@/components/ConditionCB";

export default function Page() {
    return (
        <div>
            <Header />
            <div className="ml-72 mr-72 border-2 border-gray-400 rounded-xl h-96 mt-14">
                <div className="grid grid-cols-3 grid-rows-2">
                    {/*Cím*/}
                    <div className="grid grid-cols-5 row-start-1 col-start-2 -mt-10 ">
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
                        <div className="grid grid-cols-2 grid-rows-2">
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
                        <div className="grid grid-cols-2">
                            {/*benya*/}
                            <div className="col-end-2 ">
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

                            {/*ár*/}
                            <div className="col-start-2">
                                <h1 className="display: inline">Kívánt ár </h1><h1 className="display inline font-semibold">(Ft)</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input type="text" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*ár vége*/}

                            {/*km*/}
                            <div className="col-end-2">
                                <h1 className="display: inline font-semibold">Kilóméter </h1><h1 className="display: inline">óra állás</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*km vége*/}

                            {/*év*/}
                            <div className="col-start-2">
                                <h1 className="display: inline ">Gyártási </h1><h1 className="display: inline font-semibold">év</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*év vége*/}

                            {/*kg*/}
                            <div className="col-start-2">
                                <h1 className="display: inline ">Gépjárjmű súlya</h1><h1 className="display: inline font-semibold">(kg)</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*kg vége*/}

                            {/*cc*/}
                            <div className="col-start-2">
                                <h1 className="display: inline ">Moror űrtartalma </h1><h1 className="display: inline font-semibold">(cm3)</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*cc vége*/}

                            {/*hp*/}
                            <div className="col-start-2">
                                <h1 className="display: inline ">Teljesítmény </h1><h1 className="display: inline font-semibold">(le)</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*hp vége*/}

                            {/*hajtás*/}
                            <div className="col-start-2">
                                <h1 className="display: inline ">Hajtás </h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <DrivetypeCB/>
                                </div>
                            </div>
                            {/*hajtás vége*/}

                            {/*gb*/}
                            <div className="col-start-2">
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
                            <div className="col-start-2">
                                <h1 className="display: inline ">Szállytható utasok  </h1><h1 className="display: inline font-semibold">száma</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*utas vége*/}

                            {/*ajto*/}
                            <div className="col-start-2">
                                <h1 className="display: inline ">Ajtók </h1><h1 className="display: inline font-semibold">száma</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*ajto vége*/}

                            {/*szin*/}
                            <div className="col-start-2">
                                <h1 className="display: inline ">Autó </h1><h1 className="display: inline font-semibold">színe</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-10">
                                    <input type="text" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                                </div>
                            </div>
                            {/*szin vége*/}

                            {/*allapot*/}
                            <div className="col-start-2">
                                <h1 className="display: inline ">Autó állapota</h1>
                                <hr className="w-40 h-px bg-slate-400 border-0" />
                                <div className="w-9">
                                    <ConditionCB/>
                                </div>
                            </div>
                            {/*allapot vége*/}

                        </div>
                    </div>
                    {/*col-2 end*/}

                    {/*col-3*/}
                    <div className="col-start-3">
                        {/*features*/}
                        <div className="col-start-2">
                            <h1 className="display: inline ">Gyártási </h1><h1 className="display: inline font-semibold">év</h1>
                            <hr className="w-40 h-px bg-slate-400 border-0" />
                            <div className="w-10">
                                <input type="number" className="mt-1 w-32 border-2 border-gray-400 rounded-lg cursor-pointer dark:text-gray-400" />
                            </div>
                        </div>
                        {/*features vége*/}
                    </div>
                    {/*col-3 end*/}

                </div>

            </div>
            <Footer />
        </div>
    )
}