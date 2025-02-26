"use server"
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
import { Prisma, PrismaClient } from "@prisma/client"
import { useRouter } from "next/navigation"
import { CarListing } from "@/components/CarListing"
import { ICarListing,parseCarListing } from "@/lib/car"
import { get_car_from_db } from "@/app/api/cars/[id]/route"


export default async function Page(context: {params: Promise<{id: number}>}) {
    const {id} = await context.params;
    let car_data = await get_car_from_db(id) as object;
    let car = parseCarListing(car_data);
    return (
        <div>
            <CarListing {...car}/>
        </div>
    )
}