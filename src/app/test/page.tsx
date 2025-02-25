
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
import { AdsGrid } from "@/components/ADS/AdsGrid";
import { ImageViewer } from "@/components/ImageViewer";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import HeaderBTN from "@/components/HeaderBTN";


export default function Page() {
    return (
        <div>

            <div className="p-4 grid grid-cols-4                     ">
                <div className="bg-black">
                </div>
                <div>
                    <HoverCard>
                        <HoverCardTrigger>Huzd ide az egered</HoverCardTrigger>
                        <HoverCardContent>surprise</HoverCardContent>
                    </HoverCard>
                </div>
                <BrandCB />
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

                <div className="">
                    <img className="absolute animate-spin" src="logo.png" alt="" />
                    <svg className="absolute animate-spin"></svg>
                </div>
            </div>
            <div className="">
                <AdsGrid/>
            </div>
            <div className="">
                <ImageViewer/>
            </div>

            <div>
                <HeaderBTN/>
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