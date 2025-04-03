"use server";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible"
import { Badge, Divide } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { plugin } from "postcss";
import React from "react";
import { searchCondition } from "@/components/CarSearchCard";
import HomePage from "@/components/HomePage";
import { get_car_selection } from "./jobs/carCounter/route";
import { ICarListing, parseCarListing } from "@/lib/car";
import axios from "axios";
import { randomFillSync } from "node:crypto";
import Ads from "@/components/Ads";

export default async function Home() {
 
  let cars = await get_car_selection();
  console.log(cars);
  return (
    <div className="flex flex-col h-screen">

      <div>
        <Header />
      </div>

      <div className="mt-2">
        <Ads/>
      </div>

      <div className="mb-5">


        <HomePage cars={cars} />


      </div>



    </div>

  )
}
