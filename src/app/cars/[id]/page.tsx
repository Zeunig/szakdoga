"use client"
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
import { ChevronRight, ChevronsDownUp, ChevronsDownUpIcon, ChevronsUpDown } from "lucide-react"


export default function Page() {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(50)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(count);
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])




    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div>
            <Header />
            <div className="grid grid-cols-3 grid-row-2 ml-64 mr-64 mt-20 ">

                {/*Fő adatok*/}
                <div className="col-span-2  border-2 border-grey-500 rounded-xl">
                    <div className="col-span-2 ml-12 mt-2 -mb-3 text-3xl font-bold">Audi R8 Coupé 5.2 V10 quattro R-tronic</div>
                    <div className="grid grid-cols-2">

                        {/*Képnézegető*/}
                        <div className="mx-auto max-w-xs ml-14 mb-24 mt-10 col-span-1">
                            <Carousel setApi={setApi} className="w-full max-w-xs ">
                                <CarouselContent>
                                    {Array.from({ length: count }).map((_, index) => (
                                        <CarouselItem key={index}>
                                            <Card className="h-auto w-auto">
                                                <CardContent className="flex aspect-square items-center justify-center p-6 bg-slate-300 border-2 border-slate-300 rounded-sm">
                                                    <Image src="/r8.jpg" width={500} height={500} alt="Picture of the author" />

                                                </CardContent>
                                            </Card>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>

                            <div className="py-2 text-center text-sm text-muted-foreground">
                                {current}/{count}
                            </div>
                        </div>
                        {/*Képnézegető vége*/}
                        
                        


                        {/*Infó táblázat */}
                        <div className="col-start-2 row-start-1 mt-14 ml-20">

                            {/*Árak*/}
                            <h1 className="font-bold">Ár és Költségek</h1>
                            <hr className="w-64 h-px bg-slate-400 border-0" />

                            <div className="ml-5 mr-40 grid grid-cols2 text-sm ">

                                <div className="col-start-1 col-end-2">Ár:</div>
                                <div className="col-start-2 font-bold">888 888 888 Ft</div>

                                <div className="col-start-1 col-end-2">Akciós ár:</div>
                                <div className="col-start-2 font-bold text-blue-600">888 888 888 Ft</div>

                                <div className="col-start-1 col-end-2">Ár euróban:</div>
                                <div className="col-start-2">€ 888 888 888</div>

                            </div>
                            {/*Árak vége*/}

                            {/*Általános adatok*/}
                            <h1 className="font-bold">Általános adatok</h1>
                            <hr className="w-64 h-px bg-slate-400 border-0" />

                            <div className="ml-5 mr-40 grid grid-cols2 text-sm">

                                <div className="col-start-1 col-end-2 mb-1s">Állapot:</div>
                                <div className="col-start-2">Kitűnő</div>

                                <div className="col-start-1 col-end-2 mb-1">Évjárat:</div>
                                <div className="col-start-2">2020</div>

                                <div className="col-start-1 col-end-2 mb-1">Kivitel:</div>
                                <div className="col-start-2">Coupé</div>

                            </div>
                            {/*Általános adatok vége*/}

                            {/*Jármű adatok*/}
                            <h1 className="font-bold mt-9">Jármű adatai</h1>
                            <hr className="w-64 h-px bg-slate-400 border-0" />

                            <div className="ml-5 mr-40 grid grid-cols2 text-sm">

                                <div className="col-start-1 col-end-2 mb-1">Km. óra állás:</div>
                                <div className="col-start-2">888 888km</div>

                                <div className="col-start-1 col-end-2 mb-1">Ajtók száma:</div>
                                <div className="col-start-2">2</div>

                                <div className="col-start-1 col-end-2 mb-1">Ülések:</div>
                                <div className="col-start-2">2</div>

                                <div className="col-start-1 col-end-2 mb-1">Súly:</div>
                                <div className="col-start-2">1200kg</div>

                                <div className="col-start-1 col-end-2 mb-1">Szín:</div>
                                <div className="col-start-2">Kék</div>

                            </div>
                            {/*Jármű adatok vége*/}

                            {/*Motor adatok*/}
                            <h1 className="font-bold">Motor adatai</h1>
                            <hr className="w-64 h-px bg-slate-400 border-0" />

                            <div className="ml-5 mr-40 grid grid-cols2 text-sm">

                                <div className="col-start-1 col-end-2 mb-1">Üzemanyag</div>
                                <div className="col-start-2">Benzin</div>

                                <div className="col-start-1 col-end-2 mb-1">Hengerűrtartalom:</div>
                                <div className="col-start-2">5200 cm³</div>

                                <div className="col-start-1 col-end-2 mb-1">Teljesítmény:</div>
                                <div className="col-start-2">
                                    <HoverCard openDelay={0}>
                                        <HoverCardTrigger className="underline">400kw</HoverCardTrigger>
                                        <HoverCardContent className="w-44">Ez átváltva 531 Lóerő</HoverCardContent>
                                    </HoverCard>
                                </div>

                                <div className="col-start-1 col-end-2 mb-1">Hajtás:</div>
                                <div className="col-start-2">Összkerék</div>

                                <div className="col-start-1 col-end-2 mb-1">Sebességváltó:</div>
                                <div className="col-start-2">Manuális</div>

                            </div>
                            {/*Motor adatok vége*/}

                            {/*Felszereltség*/}
                            <h1 className="font-bold">Felszereltség</h1>
                            <hr className="w-64 h-px bg-slate-400 border-0" />

                            <div className="ml-5 mr-40 text-sm">
                                <Collapsible>
                                    <CollapsibleTrigger><ChevronsUpDown className="display: inline" />Műszaki Felszeretség   </CollapsibleTrigger>
                                    <hr className="ml-5 w-36 h-px bg-slate-400 border-0" />
                                    <CollapsibleContent>
                                        <div className="ml-7 grid grid-cols-1">
                                            <ol className="list-disc">
                                                <li>01</li>
                                                <li>02</li>
                                                <li>03</li>
                                                <li>04</li>
                                                <li>05</li>
                                                <li>06</li>
                                                <li>07</li>
                                                <li>08</li>
                                                <li>09</li>
                                                <li>10</li>
                                            </ol>
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>

                                <Collapsible>
                                    <CollapsibleTrigger ><ChevronsUpDown className="display: inline" />Belső Felszeretség</CollapsibleTrigger>
                                    <hr className="ml-5 w-36 h-px bg-slate-400 border-0" />
                                    <CollapsibleContent>
                                        <div className="ml-7 grid grid-cols-1">
                                            <ol className="list-disc">
                                                <li>01</li>
                                                <li>02</li>
                                                <li>03</li>
                                                <li>04</li>
                                                <li>05</li>
                                                <li>06</li>
                                                <li>07</li>
                                                <li>08</li>
                                                <li>09</li>
                                                <li>10</li>
                                            </ol>
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>

                                <Collapsible>
                                    <CollapsibleTrigger ><ChevronsUpDown className="display: inline" />  Külső Felszeretség</CollapsibleTrigger>
                                    <hr className="ml-5 w-36 h-px bg-slate-400 border-0" />
                                    <CollapsibleContent>
                                        <div className="ml-7 grid grid-cols-1">
                                            <ol className="list-disc">
                                                <li>01</li>
                                                <li>02</li>
                                                <li>03</li>
                                                <li>04</li>
                                                <li>05</li>
                                                <li>06</li>
                                                <li>07</li>
                                                <li>08</li>
                                                <li>09</li>
                                                <li>10</li>
                                            </ol>
                                        </div>
                                    </CollapsibleContent>
                                </Collapsible>
                            </div>
                            {/*Felszereltség vége*/}

                            {/*Leírás*/}
                            <h1 className="font-bold mt-5">Leírás</h1>
                            <hr className="w-64 h-px bg-slate-400 border-0" />

                            <div className="ml-2 mr-28 text-sm text-pretty">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Recusandae nobis soluta aliquid, illo tempore reprehenderit!
                              Hic impedit sit, voluptatem facere repellendus sunt dolorem, dicta odit voluptates nesciunt ipsam dignissimos commodi.
                            </div>
                            {/*Leírás vége */}

                            {/*Eladó info*/}
                            <h1 className="font-bold mt-5">Eladó adatai</h1>
                            <hr className="w-64 h-px bg-slate-400 border-0"/>

                            <div>
                                <div>Név: Nagy László</div>
                                <div>Cím: Budapest, 1234 Budapesti út 12.</div>
                                <div>Telefon: +36 70 123 456 789</div>
                                <div>E-mail: nagylaszlo@szakdoga.hu</div>
                            </div>
                            {/*Eladó info vége*/}

                        </div>
                        {/*Infó táblázat vége*/}
                    </div>
                </div>
                {/*Fő adatok*/}

            </div>
            <Footer />
        </div>
    )
}