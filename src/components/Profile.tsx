"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs";
import MyCars from "@/components/MyCars";
import { cookies } from 'next/headers';
import { authentication } from "@/lib/auth";
import { ICarListing, parseCarListing } from "@/lib/car";
import RowCard from "@/components/RowCard";
import { Badge } from "@/components/ui/badge";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { ArrowUpFromLineIcon, Cog, Heart, MoveDown, TriangleAlert, User, UserCircle, UserCogIcon } from "lucide-react";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import React from "react";
import { IExtendedProfile } from "@/app/api/my_profile/route";
import axios from "axios";

export default function Profile({profile}: {profile: IExtendedProfile}) {
    const [email, setEmail] = React.useState("");
    async function changeEmail() {
        if(email.includes("@")) {
            axios.post("/api/my_profile/change_email", {"new_email": email}).then((res) => {
                // todo : yippeee
            }).catch((res) => {
                // todo : mi van ha beszarik
            })
        }
    }
    console.log(profile.favorites);
    return (
        
        <div>
        <div className="">

            <Tabs defaultValue="profile" className="ml-5 mr-5 place-self-center w-11/12  md:w-[1000px]">
                <TabsList className="w-full lg:w-[700px] grid grid-flow-col md:h-fit h-20 bg-blue-100 border-2 border-blue-400 rounded-lg mt-5 md:mt-10">
                    <TabsTrigger value="profile" className="h-14 w-20  md:w-fit md:h-auto"> <p> <User className="size-7" /> </p>  <p className="hidden md:block ml-2"> Profil </p>              </TabsTrigger>
                    <TabsTrigger value="settings" className="h-14 w-20  md:w-fit md:h-auto"> <p> <Cog6ToothIcon className="size-7" /> </p>  <p className="hidden md:block ml-2"> Beállítások </p>         </TabsTrigger>
                    <TabsTrigger value="cars" className="h-14 w-20  md:w-fit md:h-auto"> <p> <ArrowUpFromLineIcon className="size-7" /> </p>  <p className="hidden md:block ml-2"> Feladott hirdetések </p> </TabsTrigger>
                    <TabsTrigger value="favorites" className="h-14 w-20  md:w-fit md:h-auto"> <p className="" > <Heart className="size-7" /></p>  <p className="hidden md:block ml-2"> Mentett hirdetések </p>  </TabsTrigger>
                </TabsList>


                {/*Profil*/}
                <TabsContent value="profile" className="">
                    <Card className="h-[300px] bg-blue-100 border-2 border-blue-400  rounded-lg">
                        <CardHeader>
                            <UserCircle className="size-20" />

                            <CardTitle className="font-bold text-3xl grid grid-flow-col w-80 ">
                                <div>{profile?.name}</div>
                                <div className="text-center">{profile?.name && profile.permissions > 0 && <a href="/reports">
                                    <Badge className="inline-block size-fit  bg-red-600 content-center">
                                        <TriangleAlert className="size-7 inline-block" />
                                        <p className="inline-block text-base">Jelentett hirdetések</p>
                                    </Badge>
                                </a>}
                                        
                                </div>
                            </CardTitle>



                            <hr className="w-80 h-px bg-slate-400 border-0" />
                        </CardHeader>
                        <CardContent className="    ">
                            Csatlakozott : {profile?.join_date?.toLocaleDateString()}<br></br>
                            Feltett autók : {profile.car.length}<br></br>
                        </CardContent>
                        <CardFooter>

                        </CardFooter>
                    </Card>
                </TabsContent>
                {/*Profil end*/}

                {/*Setting*/}
                <TabsContent value="settings" className="">
                    <Card className="h-[300px] bg-blue-100 border-2 border-blue-400  rounded-lg">
                        <CardHeader>
                            <CardTitle className="font-bold text-3xl">Beállítások</CardTitle>
                            <hr className="w-80 h-px bg-slate-400 border-0" />
                        </CardHeader>
                        <CardContent className="    ">
                            <div >E-mail cím változtatása:</div>
                            <hr className="w-40 h-px bg-slate-400 border-0 mt-1 mb-3" />
                            <div className="display: inline">Regisztrált e-mail cím:</div> <input type="email" name="" id="" value={profile?.email} disabled className="border-2 border-gray-400 rounded-lg display: inline" />
                            <br />
                            <div className="display: inline">Új e-mail cím:</div>  <input type="email" name="" id=""  onChange={(e) => {setEmail(e.target.value)}} className="border-2 border-gray-400 rounded-lg display: inline" />
                            <button onClick={changeEmail}>Mentés</button>
                        </CardContent> {/* TODO : EMAIL MÓDOSÍTÁS */}
                    </Card>
                </TabsContent>
                {/*Setting end*/}

                {/*myCars*/}
                <TabsContent value="cars" className="">
                    <Card className="min-h-[300px] bg-blue-100 border-2 border-blue-400  rounded-lg ">
                        <CardHeader>
                            <CardTitle className="font-bold text-3xl">Feladott hirdetések</CardTitle>
                            <CardDescription className="w-fit">Itt láthatod a feladott hirdetéseidet az oldalunkon
                                <hr className="w-full h-px bg-slate-400 border-0" />
                            </CardDescription>


                        </CardHeader>
                        <CardContent className="h-full ">
                            <ScrollArea className="h-full ">
                                <div className="grid grid-cols-1 ml-14 lg:ml-0 lg:grid-cols-4">
                                    <ScrollBar orientation="vertical" />
                                    {
                                        profile.car.map((car) => (
                                            <div key={car.id} className="mb-3"> <MyCars car={car} /> </div>
                                        ))
                                    }
                                </div>
                            </ScrollArea >
                        </CardContent>
                    </Card>
                </TabsContent>
                {/*myCars end*/}

                {/*favCars */}
                <TabsContent value="favorites" className="">
                    <Card className="min-h-[300px]  bg-blue-100 border-2 border-blue-400  rounded-lg ">
                        <CardHeader>
                            <CardTitle className="font-bold text-3xl">Mentett hirdetések ({profile.favorites.length})</CardTitle>
                            <CardDescription className="w-fit ">Itt láthatod azokat a hirdetéseket amelyeket kedveltél az oldalunkon
                                <hr className="w-full h-px bg-slate-400 border-0" />
                            </CardDescription>


                        </CardHeader>
                        <CardContent className="h-full ">
                            <ScrollArea className="h-full ">
                                <ScrollBar orientation="vertical" />
                                <div className="grid grid-flow-row gap-3">


                                    {profile.favorites.map((car) => {
                                        let car_car = parseCarListing(car["car" as keyof ICarListing]);
                                        return (
                                            <div key={car_car.id} className="row-span-1"><RowCard car={car_car} /></div>
                                        );
                                    })}

                                </div>
                            </ScrollArea >

                        </CardContent>
                    </Card>
                </TabsContent>
                {/*favCars end*/}
            </Tabs>
        </div>
    </div>
    )
}