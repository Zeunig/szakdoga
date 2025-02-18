

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ProfileDataTable from "@/components/ProfileDataTable";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs"
import { Cog } from "lucide-react";

export default function Page() {
    return (
        <div>
            <Header />
            <div className="h-400 mb-60 w-50  mt-20">
                <div>
                    <div className="h-fit grid justify-items-center  mx-auto w-[1000px] max-w-screen-xl p-4 py-6 lg:py-8 border-2 border-gray-400 rounded-lg ">

                        <Tabs defaultValue="cars" className="w-[700px] grid grid-cols-3 ">

                            <TabsList className="col-1 -ml-24 w-fit h-[300px] grid grid-rows-4 border-2 border-gray-400 rounded-lg">
                                <TabsTrigger value="profile" className="row-1 w-[130px]  border-2 border-gray-400 rounded-lg">Profil</TabsTrigger>
                                <TabsTrigger value="settings" className="row-start-2 w-[130px] border-2 border-gray-400 rounded-lg">Regisztráció</TabsTrigger>
                                <TabsTrigger value="cars" className="row-start-3 w-[130px] border-2 border-gray-400 rounded-lg">Feladott hírdetések</TabsTrigger>
                                <TabsTrigger value="" className="row-start-4 w-[130px] border-2 border-gray-400 rounded-lg">Mentett hirdetések</TabsTrigger>
                            </TabsList>


                            {/*Profil*/}
                            <TabsContent value="profile" className="-ml-40 -mr-24  mt-0  col-start-2 col-span-2">
                                <Card className="h-[300px] border-2 border-gray-400 rounded-lg">

                                    <CardHeader>
                                        <CardTitle>Profil</CardTitle>
                                        <CardDescription>
                                            Itt tudod a profilod adatait megnézni és szerkeszteni
                                            <hr className="w-[325Px] h-px bg-slate-400 border-0" />
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                            
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="email">Fiók név: </Label>
                                            {"PLACEHOLDER"}
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="password">Email cím: </Label>
                                            {"PLACEHOLDER"}
                                        </div>
                                    </CardContent>

                                    <CardFooter>
                                        
                                    </CardFooter>

                                </Card>
                            </TabsContent>
                            {/*Profil end*/}

                            {/*Settings*/}
                            <TabsContent value="settings" className="-ml-40 -mr-24  mt-0  col-start-2 col-span-2">
                                <Card className="h-[300px] border-2 border-gray-400 rounded-lg">

                                    <CardHeader>
                                        <CardTitle> Beálítások</CardTitle>
                                        <CardDescription>
                                            Itt tudod a profilod adatait megnézni és szerkeszteni
                                            <hr className="w-[325Px] h-px bg-slate-400 border-0" />
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="space-y-2">
                                    <div className="space-y-1">
                                            
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="email">Fiók név: </Label>
                                            {"PLACEHOLDER"}
                                        </div>
                                        <div className="space-y-1">
                                            <Label htmlFor="password">Email cím: </Label>
                                            {"PLACEHOLDER"}
                                        </div>
                                    </CardContent>

                                    <CardFooter>
                                        
                                    </CardFooter>

                                </Card>
                            </TabsContent>
                            {/*Profil end*/}

                            {/*Profil*/}
                            <TabsContent value="cars" className="-ml-40 -mr-24 mt-0  col-start-2 col-span-2">
                                <Card className="border-2 h-[500px] border-gray-400 rounded-lg">

                                    <CardHeader>
                                        <CardTitle>Feladott hírdetések</CardTitle>
                                        <CardDescription>
                                            Itt látod és tudod szerkeszteni a feladott hídetéseid
                                            <hr className="w-fit h-px bg-slate-400 border-0" />
                                        </CardDescription>
                                    </CardHeader>

                                    <CardContent className="space-y-2">
                                        <div className="space-y-1">
                                            <ProfileDataTable/>
                                        </div>
                                    </CardContent>

                                    <CardFooter>
                                        
                                    </CardFooter>

                                </Card>
                            </TabsContent>
                            {/*Profil end*/}




                        </Tabs>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}