"use client";

import * as React from "react"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import Image from "next/image";
import { CarCardHL } from "@/components/CarCardHL"
import { AdsGrid } from "@/components/ADS/AdsGrid"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Collapsible } from "@radix-ui/react-collapsible"
import { Button } from "@/components/ui/button"
import { AlertTriangleIcon, ChevronDown, ChevronDownCircle, ChevronRight, ChevronsDownUp, ChevronsDownUpIcon, ChevronsUpDown, Divide, Heart, Mail, MapIcon, Phone } from "lucide-react"
import { ICarListing, parseCarListing } from "@/lib/car"
import { Prisma, PrismaClient } from "@prisma/client"
import { useRouter } from "next/navigation"
import { BigImageViewer } from "./BigImageViewer";
import FavoriteButton from "./FavoriteButton";
import axios from "axios";
import Autoplay from "embla-carousel-autoplay";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"
import { Textarea } from "./TextArea";
import { useToast } from "@/hooks/use-toast"

import { ToastAction } from "@/components/ui/toast"

export function CarListing({ car, isAuthed }: { car: ICarListing, isAuthed: boolean }) {
    const { toast } = useToast()
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(car.images.length);
    const [showImageViewer, setShowImageViewer] = React.useState("");
    const [isOpen, setIsOpen] = React.useState(false);
    const router = useRouter();
    React.useEffect(() => {
        if (!api) {
            return
        }
        setCount(count);
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        });
    }, [api])
    function report() {
        let report_reason = prompt("Írd le a jelentés indokát");
        if (report_reason == null || report_reason == "") {
            return;
        } else {
            axios.post("/api/report", { "reason": report_reason, "car_id": car.id }).then((res) => console.log(res));
        }
    }
    
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )


    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:grid-rows-2 lg:w-full lg:mt-20 w-11/12 my-10">
            
            {/*Price card sm*/}
            <div className="sticky top-2  lg:hidden ">
                <div className="border-2 border-blue-600 rounded-lg inline-block w-full" >

                    <Card className="h-fit rounded-lg bg-opacity-80 bg-white">
                        <CardContent>
                            <p className="text-2xl font-bold text-center mt-3">{car?.brand} {car?.model}</p>
                            <hr className="w-full h-px mx-auto  mb-2 bg-slate-400 border-0" />
                            <p className="text-2xl text-blue-600 font-bold">Akciós ár: {(car.price * 0.8).toLocaleString()} Ft</p>
                            <p className="text-xl" >Brutto ár: {car.price.toLocaleString()} Ft</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
            {/*Price card sm end*/}
            <div className="relative w-full min-h-[500px] lg:max-h-[900px] col-span-1 lg:col-span-5 lg:col-start-3 row-span-1 bg-blue-200  border-2 border-blue-600 rounded-lg inline-block place-items-center">

                {/* Nagy képnézegető */}
                {
                    showImageViewer != "" && <div className="absolute -left-5 lg:-left-[326px] w-full bg-red-50" onClick={() => { setShowImageViewer("") }}><BigImageViewer imagePath={showImageViewer} /></div>
                }
                {/* Nagy képnézegető vége */}

                {/*Képnézegető*/}
                <div className="absolute left-0 right-0">
                    <Carousel setApi={setApi} className="lg:w-[659px] w-10/12 place-self-center mt-3 bg-slate-900 bg-opacity-20 rounded-2xl"
                        plugins={[plugin.current]}
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}>
                        <CarouselContent className="">
                            {Array.from({ length: count }).map((_, index) => (
                                <CarouselItem key={index} className="lg:h-[500px] lg:w-[800px] " onClick={() => { setShowImageViewer(car?.images[index]) }}>
                                    <Image src={car?.images[index]} width={800} height={500} alt="Hiba a kép betöltése bözben" className="items-center justify-center p-6 hidden lg:flex" />
                                    <Image src={car?.images[index]} width={400} height={300} alt="Hiba a kép betöltése bözben" className="flex  items-center justify-center p-6 lg:hidden " />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="ml-2 hidden md:block bg-blue-300 hover:text-blue-600 hover:border-blue-600 hover:border-2" />
                        <CarouselNext className="mr-2 hidden md:block bg-blue-300 hover:text-blue-600 hover:border-blue-600 hover:border-2" />
                        <div className=" text-center text-sm text-blue-600 mb-5 font-bold">
                            {current}/{count}
                        </div>
                    </Carousel>


                </div>

                {/*Képnézegető vége*/}

                {/* Infó táblázat */}
                <div className="absolute bottom-0 left-0 right-0 bg-slate-900 bg-opacity-20 rounded-lg mx-5 mb-5 ">

                    <div className="row-start-1 grid lg:grid-cols-4 grid-cols-2 text-center" >
                        <div className="place-content-center">
                            <p className="font-semibold text-blue-600  text-lg">Futott kilóméterek:</p>
                            <p className="text-base font-semibold">{(car?.mileage).toLocaleString()} km</p>
                        </div>
                        <div className="place-content-center">
                            <p className="font-semibold text-blue-600  text-lg">Teljesítmény:</p>
                            <p className="text-base font-semibold">{Math.floor(car?.horsepower * 0.7457)} kW  ({car?.horsepower} le)</p>
                        </div>
                        <div className="place-content-center">
                            <p className="font-semibold text-blue-600  text-lg">Hajtóanyag fajtálya:</p>
                            <p className="text-base font-semibold">{car?.fuel_type}</p>
                        </div>
                        <div className="place-content-center">
                            <p className="font-semibold text-blue-600  text-lg">Váltó fajtálya:</p>
                            <p className="text-base font-semibold">{car?.gearbox}</p>
                        </div>
                    </div>


                </div>
                {/* Infó táblázat vége*/}


            </div>
            {/*Main card end*/}
            

            <div className="lg:col-span-5 lg:col-start-3  lg:row-start-2  ">
                {/*Info card*/}
                <div className="bg-blue-200  border-2 border-blue-600 rounded-lg inline-block  w-full">
                    <div className="mt-5 mx-5 mb-10">
                        <p className="text-3xl font-semibold text-blue-600 ">Alapvető adatok</p>
                        <hr className="w-full h-px mx-auto  mb-2 bg-slate-400 border-0" />
                        <div className="jutify-center w-full  bg-slate-900 bg-opacity-20 rounded-lg ">
                            <div className="grid grid-cols-5 mt-5 text-center">
                                <div className="col-start-1 mb-3">
                                    <p className="text-base font-semibold text-blue-600 ">Jármű állapota</p>
                                    <p className="text-lg font-semibold text-gray-700">{car.condition}</p>
                                </div>
                                <div className="col-start-2">
                                    <p className="text-base font-semibold text-blue-600 ">Karosszériatípus</p>
                                    <p className="text-lg font-semibold text-gray-700">{car.design}</p>
                                </div>
                                <div className="col-start-3">
                                    <p className="text-base font-semibold text-blue-600 ">Színe</p>
                                    <p className="text-lg font-semibold text-gray-700">{car.color}</p>
                                </div>
                                <div className="col-start-4">
                                    <p className="text-base font-semibold text-blue-600 ">Ülések</p>
                                    <p className="text-lg font-semibold text-gray-700">{car.passengers}</p>
                                </div>

                                <div className="col-start-5">
                                    <p className="text-base font-semibold text-blue-600 ">Ajtók</p>
                                    <p className="text-lg font-semibold text-gray-700">{car.doors}</p>
                                </div>



                            </div>
                        </div>
                        <p className="text-3xl font-semibold text-blue-600 ">Műszaki adatok</p>
                        <hr className="w-full h-px mx-auto  mb-2 bg-slate-400 border-0" />
                        <div className="jutify-center w-full bg-slate-900 bg-opacity-20 rounded-lg">
                            <div className="grid grid-cols-5 mt-5 text-center">
                                <div className="col-start-1 mb-3">
                                    <p className="text-base font-semibold text-blue-600 ">Évjárat</p>
                                    <p className="text-lg font-semibold text-gray-700">{car.year}</p>
                                </div>
                                <div className="col-start-2">
                                    <p className="text-base font-semibold text-blue-600 ">Meghajtás típusa</p>
                                    <p className="text-lg font-semibold text-gray-700">{car.drive_type}</p>
                                </div>
                                <div className="col-start-3">
                                    <p className="text-base font-semibold text-blue-600 ">Hengerűrtartalom</p>
                                    <p className="text-lg font-semibold text-gray-700">{(car.cc).toLocaleString()} cm³</p>
                                </div>
                                <div className="col-start-4">
                                    <p className="text-base font-semibold text-blue-600 ">Tömege</p>
                                    <p className="text-lg font-semibold text-gray-700">{car.year}</p>
                                </div>
                                <div className="col-start-5">
                                    <p className="text-base font-semibold text-blue-600 ">Kilométeróra állása</p>
                                    <p className="text-lg  font-semibold text-gray-700">{car.color}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Info card end*/}

                {/*Features card*/}
                <div className="bg-blue-200  border-2 border-blue-600 rounded-lg inline-block w-full mt-10 mb-5">
                    <div className="mt-5 mx-5">
                        <p className="text-2xl font-semibold text-blue-600 ">Felszereltség</p>
                        <hr className="w-full h-px mx-auto  mb-2 bg-slate-400 border-0" />
                        <div className="grid grid-rows-3 mx-5 mt-5 mb-3">

                            <div className="">
                                <p className="text-lg font-bold text-blue-600">Biztonsági Felszereltség</p>
                                <hr className="w-full h-px mx-auto  mb-2 bg-slate-400 border-0" />
                                <div className="grid grid-flow-col  bg-slate-900 bg-opacity-20 rounded-lg ">
                                    {car.features.safety.map((feature) => (
                                        <div key={feature} className="w-full mx-2 h-8 mt-2" >{feature}</div>
                                    ))}
                                </div>

                            </div>

                            <div className="">
                                <p className="text-lg font-bold text-blue-600">Belső Felszereltség</p>
                                <hr className="w-full h-px mx-auto  mb-2 bg-slate-400 border-0" />
                                <div className="grid grid-flow-col bg-slate-900 bg-opacity-20 rounded-lg">
                                    {car.features.interior.map((feature) => (
                                        <div key={feature} className="w-full mx-2 h-8 mt-2" >{feature}</div>
                                    ))}
                                </div>
                            </div>

                            <div className="">
                                <p className="text-lg font-bold text-blue-600">Külcső  Felszereltség</p>
                                <hr className="w-full h-px mx-auto  mb-2 bg-slate-400 border-0 text-start" />
                                <div className="grid grid-flow-col bg-slate-900 bg-opacity-20 rounded-lg">
                                    {car.features.exterior.map((feature) => (
                                        <div key={feature} className="w-full mx-2 h-8 mt-2" >{feature}</div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/*Features card end*/}
            </div>


            {/*Price card lg*/}
            <div className="sticky top-0 col-start-8 -mt-8 row-start-1 hidden lg:block">
                <div className=" border-2 border-blue-600 rounded-lg inline-block w-80 mt-8">
                    <Card className="h-full rounded-lg">
                        <CardHeader>
                            <p className="text-3xl font-bold">{car?.brand} {car?.model}</p>
                        </CardHeader>
                        <CardContent>
                            <hr className="w-full h-px mx-auto -mt-4  mb-2 bg-slate-400 border-0" />
                            <p className="text-xl" >Brutto ár: {car.price.toLocaleString()} Ft</p>
                            <p className="text-2xl text-blue-600 font-bold">Akciós ár: {(car.price * 0.8).toLocaleString()} Ft</p>
                            <hr className="w-full h-px mx-auto mt-3  mb-2 bg-slate-400 border-0" />

                            <Collapsible>
                                <CollapsibleTrigger className=""><p className="text-xl inline-block" >Eladó adatai <ChevronDown className="inline-block" /></p></CollapsibleTrigger>
                                <CollapsibleContent>
                                    <hr className="w-full h-px mx-auto mt-3  mb-2 bg-slate-400 border-0" />
                                    <p className="font-bold ml-3 text-blue-600 text-lg "> Név:{ } </p>
                                    <p className="font-bold ml-3"> <Mail className="inline-block text-blue-600" />: { } </p>
                                    <p className="font-bold ml-3"> <Phone className="inline-block text-blue-600" />: { } </p>
                                    <p className="font-bold ml-3"> <MapIcon className="inline-block text-blue-600" />: { } </p>

                                </CollapsibleContent>
                            </Collapsible>
                            <hr className="w-full h-px mx-auto mt-3  mb-2 bg-slate-400 border-0" />

                            <div className="grid grid-cols-2 gap-2">

                                <div className="forced-colors:bg-slate-950">
                                    <div className="col-span-1 w-full ">
                                        {!isAuthed && <button className="w-full" onClick={() => {
                                            toast({
                                                variant: "kpak",
                                                title: "Jelentkezz be!",
                                                description: "Ahhoz hogy kedvelni tudd, be kell hogy jelentkezz!",
                                                action: <ToastAction altText="Katt ide!" className="border-2 border-blue-600 hvr-glow hvr-grow bg-white"><a href="/auth" >Katt ide!</a></ToastAction>,
                                            });
                                        }}
                                        >
                                            <div className='bg-slate-300 rounded-lg border-2 w-full border-slate-400 h-12  font-semibold'>
                                                <Heart fill="black" className='inline-block ' /> <p className='inline-block'>Kedvelés</p>
                                            </div>

                                        </button>}

                                        {isAuthed && <FavoriteButton car_id={car?.id} />}

                                    </div>
                                </div>
                                <div className="col-span-1">
                                    <Dialog>
                                        <DialogTrigger className="w-full h-full">

                                            <button className="bg-rose-300 w-full h-full inline-block border-2 rounded-lg font-semibold">
                                                <AlertTriangleIcon className="inline-block" />
                                                <p className="inline-block ml-2 aling-center">Jeletés</p>
                                            </button>
                                        </DialogTrigger>
                                        <DialogContent className="border-red-600 border-4">
                                            <DialogHeader>
                                                <DialogTitle className="text-red-600 text-2xl">Hibajelentés írása</DialogTitle>
                                                <hr className="w-full h-px mx-auto mt-3  mb-2 bg-red-600 border-0" />
                                            </DialogHeader>
                                            <Textarea className="mb-8" />
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </div>
            {/*Price card lg end*/}

            
        </div>
    )
}