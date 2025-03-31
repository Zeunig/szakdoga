"use server";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible"
import { Badge } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { plugin } from "postcss";
import React from "react";
import { searchCondition } from "@/components/CarSearchCard";
import HomePage from "@/components/HomePage";
import { get_car_selection } from "./jobs/carCounter/route";

<<<<<<< Updated upstream
export default async function Home() {
    let cars = await get_car_selection();
    console.log(cars);
    return (
      <div className="flex flex-col h-screen">
  
        <div>
          <Header />
=======
export default function Home() {

  return (
    <div className="flex flex-col h-screen">

      <div>
        <Header />
      </div>

      <div className="mb-5">

        <div className="bg-blue-200 mx-auto border-2 border-blue-600 rounded-lg mt-5 w-11/12 md: lg:w-[1200px]">
          <div className="">

            {/*Autó kereső*/}
            <div className="w-full">
              <div className="lg:w-full w-fit ">
                <div className="mx-2 lg:place-self-center my-3 lg:grid lg:grid-cols-5">

                  <div className="place-self-center row-span-1">
                    <label htmlFor="brand">Márka: <br /> </label>
                    <select id="brand" name="brand" className="border w-[360px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg lg:w-36">
                    
                    </select>
                  </div>

                  <div className="place-self-center row-span-1">
                    <label htmlFor="model">Modell: <br /> </label>
                    <select id="model" name="model" className="border w-[360px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg lg:w-36">

                    </select>
                  </div>

                  <div className="place-self-center">
                    <label htmlFor="fuel">Üzemanyag: <br /> </label>
                    <select id="fuel" name="fuel" className="border w-[360px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg lg:w-36">

                    </select>
                  </div>

                  <div className="place-self-center">
                    <label htmlFor="year">Év: <br /> </label>
                    <input type="number" id="price" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                    <input type="number" id="price" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                  </div>

                  <div className="place-self-center">
                    <label htmlFor="price">Vételár: <br /> </label>
                    <input type="number" id="price" name="price" className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-block" placeholder="-tól" />
                    <input type="number" id="price" name="price" className="border w-[180px]  lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-block" placeholder="-ig" />
                  </div>
                  <button className="bg-blue-600 rounded-lg  place-self-end col-span-5 h-10 mt-5 w-full lg:w-52 text-white font-bold mr-5 text-center content-center  hvr-gwrow hvr-glow">
                    <a href="">
                      Keresés
                    </a>
                  </button>
                </div>
              </div>
            </div>
            {/*Autó kereső vége*/}

          </div>
>>>>>>> Stashed changes
        </div>
        <HomePage cars={cars}/>

      </div>
    )
}


