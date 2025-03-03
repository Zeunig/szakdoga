"use server";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { BrandCB } from "@/components/BrandCB"
import { Search } from "@/lib/search/search"
import { SearchIcon } from "lucide-react"
import { ModelCB } from "./ModelCB"
import { get_car_selection, ISortedCarSelection } from "@/app/jobs/carCounter/route"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import SMGR1 from "./smSearch/SMGR1";
import SMGR2 from "./smSearch/SMGR2";
import SMGR3 from "./smSearch/SMGR3";
import SMGR4 from "./smSearch/SMGR4";
import SMGR5 from "./smSearch/SMGR5";
export async function CarSearchCard() {
    let cars = await get_car_selection();
    console.log(cars);
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
                    {/*lg*/}
                    <div>

                        <div className="bg-red-400">
                            <Collapsible className="hidden lg:block">
                                <CollapsibleTrigger>Group 01</CollapsibleTrigger>
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

                        <div className="bg-blue-400">
                            <Collapsible className="hidden lg:block">
                                <CollapsibleTrigger>Group 02</CollapsibleTrigger>
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

                    </div>
                    {/*lg end*/}

                    {/*sm*/}
                    <div>

                        <div>
                            <SMGR1 />
                        </div>

                        <div>
                            <SMGR2 />
                        </div>

                        <div>
                            <SMGR3 />
                        </div>

                        <div>
                            <SMGR4 />
                        </div>

                    </div>
                    {/*sm end*/}


                    <div className="grid grid-rows-2">
                        <button type="button" className="bg-slate-300">BTN</button>
                        <div className="row-">Number of matching</div>
                    </div>

                </CardContent>
                <CardFooter className="text-xs text-muted-foreground" >
                    <p>© 2025 Körpörgő Autókereskedés™.</p>
                </CardFooter>
            </Card>
        </div>
    )
}