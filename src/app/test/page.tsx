"use client";
import { BrandCB } from "@/components/BrandCB";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import SUC from "@/components/SUC";
import { AdsGrid } from "@/components/0A_unused/ADS/AdsGrid";
import { ImageViewer } from "@/components/ImageViewer";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import React, { useRef } from "react";
import ToTopBtn from "@/components/ToTopBtn";



export default function Page() {
    const carIdRef = useRef(0);   
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
    async function buyUpload() {
        fetch(`${location.protocol}//${window.location.host}/api/pay`, {
            method: "POST",
            redirect: "follow",
            body: JSON.stringify(
                {
                    "product_id": 2
                }
            )
        })
        .then(res => res.json()).then(json => window.location.href = json["redirect"]);
    }
    return (

        <div>
            <div>
                <ToTopBtn/>
            <Image src="/17-512.webp" width={800} height={500} alt="Hiba a kép betöltése bözben" className="items-center justify-center p-6 hidden lg:flex"/>
            </div>
            <div>
                <Input type="number" name="carid" id="carid" />
                <button onClick={buyFeature}>Vásárlás: Kiemelés</button>
                <button onClick={buyUpload}>Vásárlás: Végtelen feltöltés</button>
            </div>
            <div className="p-4 grid grid-cols-4                     ">
                <div className="bg-black">
                </div>
                <div>
                    <HoverCard>
                        <HoverCardTrigger>Huzd ide az egered</HoverCardTrigger>
                        <HoverCardContent>surprise</HoverCardContent>
                    </HoverCard>
                </div>
                <div>
                    <Drawer>
                        <DrawerTrigger>Megnyitás</DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Fiók cím</DrawerTitle>
                            </DrawerHeader>
                            <DrawerFooter>
                                <p>Egy- egy almafa</p>
                                <p>Kettő- Két latica</p>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
                <div className="h-[200px] ">
                    <ResizablePanelGroup direction="horizontal" >
                        <ResizablePanel className="bg-green-600">
                            <ResizablePanelGroup direction="vertical" >
                                <ResizablePanel className="bg-green-600">
                                    Panel 1
                                </ResizablePanel>
                                <ResizableHandle />
                                <ResizablePanel className="bg-green-900">
                                    Panel 2
                                </ResizablePanel>
                            </ResizablePanelGroup>
                        </ResizablePanel>
                        <ResizableHandle />
                        <ResizablePanel className="bg-green-900">
                            <ResizablePanelGroup direction="vertical" >
                                <ResizablePanel className="bg-green-600">
                                    Panel 1
                                </ResizablePanel>
                                <ResizableHandle />
                                <ResizablePanel className="bg-green-900">
                                    Panel 2
                                </ResizablePanel>
                            </ResizablePanelGroup>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                </div>

                
            </div>
            <div className="">
                <AdsGrid/>
            </div>
            <div className="">
                <ImageViewer/>
            </div>

            <div className="">
                    <img className="absolute animate-spin mt-32" src="logo.png" alt="" />
                    
                </div>

            <div>
                
            </div>

            <div className="mx-96 mt-80          ">
                <SUC />
            </div>



            <div className="h-20 bg-blue-500 ">
            <ScrollArea className="h-20">
                a <br />
                b <br />
                c <br />
                d <br />
                e <br />
            </ScrollArea>
            </div>

            <div>
            <Sheet>
                <SheetTrigger>Open</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        <button><a href="/">HOME</a></button>
                        <br />
                        <button><a href="/search">SEARCH</a></button>
                        <br />
                        <button className="ml-5"><a href="/search/cars">CARS</a></button>
                        <br />
                        <button><a href="/cars"></a></button>
                    </SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
            </div>
            <div>
                <form action="http://localhost:3000/api/marketplace/image" method="post" encType="multipart/form-data">
                <input id="file" name="file" type="file"></input>
                <input type="submit" value="submitttt xddddd" />
                </form>
            </div>


        </div>

        
    )
}