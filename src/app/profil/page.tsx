"use server"

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs";
import MyCars from "@/components/MyCars";
import { cookies } from 'next/headers';
import { authentication } from "@/lib/auth";
import { get_my_profile } from "../api/my_profile/route";
import { ICarListing } from "@/lib/car";


export default async function Page() {
    const auth_cookie = (await cookies()).get("auth");
    if(auth_cookie === undefined) {
        console.error("TODO: redirect /auth");
        return;
    }else {
        let auth = await authentication(auth_cookie.value);
        if (auth["success"] == true) {
            var profile = await get_my_profile(auth["payload"]["id"] as unknown as number);
        }else {
            return;
        }
    }
    var cars = profile["car"] as ICarListing[];
    console.log(cars);
    return (
        <div className="scrollbar-hidden">
            <Header />
            <div className="">
                <div>
                    <div className="">

                        <Tabs defaultValue="profile" className="ml-5 mr-5 lg:ml-[300px] lg:mr-[300px] ">
                            <TabsList className="w-full lg:w-[700px] h-10 bg-gray-300 border-2 border-gray-400 rounded-lg mt-10">
                                <TabsTrigger value="profile" className="w-[150px]">Profil</TabsTrigger>
                                <TabsTrigger value="settings" className="w-[150px]">Beállítások</TabsTrigger>
                                <TabsTrigger value="cars" className="w-[150px]">Feladott hirdetések</TabsTrigger>
                                <TabsTrigger value="favorites" className="w-[150px]">Mentett hirdetések</TabsTrigger>
                            </TabsList>


                            {/*Profil*/}
                            <TabsContent value="profile" className="">
                                <Card className="h-[300px] bg-gray-300 border-2 border-gray-400 rounded-lg">
                                    <CardHeader>
                                        <img width="64px" height="64px" src={profile?.avatar_url} alt="" />
                                        <CardTitle className="font-bold text-3xl">{profile?.name}</CardTitle>
                                        <hr className="w-80 h-px bg-slate-400 border-0" />
                                    </CardHeader>
                                    <CardContent className="    ">

                                    </CardContent>
                                    <CardFooter>
                                        Csatlakozott : {profile?.join_date?.toLocaleDateString()}<br></br>
                                        Feltett autók : {cars.length}<br></br>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                            {/*Profil end*/}

                            {/*Setting*/}
                            <TabsContent value="settings" className="">
                                <Card className="h-[300px] bg-gray-300 border-2 border-gray-400 rounded-lg">
                                    <CardHeader>
                                        <CardTitle className="font-bold text-3xl">Beállítások</CardTitle>
                                        <hr className="w-80 h-px bg-slate-400 border-0" />
                                    </CardHeader>
                                    <CardContent className="    ">
                                        <div >Email cím változtatása:</div>
                                        <hr className="w-40 h-px bg-slate-400 border-0 mt-1 mb-3" />
                                        <div className="display: inline">Regisztrált email cím:</div> <div className="display: inline w-[300px] border-2 border-gray-400 rounded-lg text-muted text-gray-600">{profile?.email}</div>
                                        <br />
                                        <div className="display: inline">Új email cím:</div>  <input type="email" name="" id="" className="border-2 border-gray-400 rounded-lg display: inline" />
                                    </CardContent> {/* TODO : EMAIL MÓDOSÍTÁS */}
                                </Card>
                            </TabsContent>
                            {/*Setting end*/}

                            {/*myCars*/}
                            <TabsContent value="cars" className="">
                                <Card className=" bg-gray-300 border-2 border-gray-400 rounded-lg ">
                                    <CardHeader>
                                        <CardTitle className="font-bold text-3xl">Feladott hírdetések</CardTitle>
                                        <CardDescription className="">Itt látod a fealdott hírdetéseidet az oldalunkon</CardDescription>
                                        <hr className="w-80 h-px bg-slate-400 border-0" />

                                    </CardHeader>
                                    <CardContent className="min-h-80 max-h-fit">
                                        <ScrollArea className="h-[550px]">
                                        <div className="grid grid-cols-1 ml-14 lg:ml-0 lg:grid-cols-4">
                                        <ScrollBar orientation="vertical"/>
                                            {
                                                cars.map((car) => (
                                                    <div className="mb-3"> <MyCars car={car}/> </div>
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
                                <Card className=" bg-gray-300 border-2 border-gray-400 rounded-lg ">
                                    <CardHeader>
                                        <CardTitle className="font-bold text-3xl">Mentet hírdetések</CardTitle>
                                        <CardDescription className="w-64 lg:w-[500px]">Itt látod azokat a herdetéseket amelyeket kedveltél az oldalunkon</CardDescription>
                                        <hr className="w-80 h-px bg-slate-400 border-0" />

                                    </CardHeader>
                                    <CardContent className="min-h-80 max-h-fit">
                                        <div className="">
                                            <table className="table-fixed mt-10">
                                                <thead>
                                                    <tr className="border-b-2 border-slate-400">
                                                        <th className="w-[130px] ">Márka</th>
                                                        <th className="w-[130px] ">Model</th>
                                                        <th className="w-[130px] ">Kívánt ár</th>
                                                        <th className="w-[130px] ">Akcíós ár</th>
                                                    </tr>
                                                </thead>

                                                <tbody>

                                                    <tr className="border-b-2 border-slate-400">
                                                        <td className="text-center">Mercedes-Benz</td>
                                                        <td className="text-center">Golf</td>
                                                        <td className="text-center ">888 888 888Ft</td>
                                                        <td className="text-center text-blue-600 font-bold">888 888 888Ft</td>
                                                    </tr>
                                    
                                                </tbody>
                                            </table>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            {/*favCars end*/}
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className="mt-auto">
            <Footer />
            </div>
        </div>

    )
}