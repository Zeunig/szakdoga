"use client";

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible"
import { Badge, Divide, FileVideo } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { plugin } from "postcss";
import React, { ChangeEvent, SetStateAction, useEffect, useLayoutEffect } from "react";
import { searchCondition } from "@/components/CarSearchCard";
import { ISortedCarSelection } from "@/app/jobs/carCounter/route";
import { BrandCB } from "./BrandCB";
import { ModelCB } from "./ModelCB";
import RowCard from "./RowCard";
import { ICarListing, parseCarListing } from "@/lib/car";
import axios from "axios";
import { CarCardHL } from "./CarCardHL";
import { CarCard } from "./CarCard";
import MainCars from "./MainCars";
import MainCarsHL from "./MainCarsHL";

export default function HomePage({ cars }: { cars: ISortedCarSelection[] }) {
  let [featuredCars, setFeaturedCars] = React.useState<ICarListing[]>([]);
  let [searchResult, setSearchResult] = React.useState<ICarListing[]>([]);
  useEffect(() => {
    let featured_cars: ICarListing[] = [];
    let url = new URL("/api/marketplace/search?featured_only=1&limit=2", window.location.origin).toString();
    console.log(url);
    axios.get(url).then((res) => {
      console.log(res.data);
      for (var i = 0; i < res.data["data"].length; i++) {
        setFeaturedCars([...featured_cars,
        parseCarListing(res.data["data"][i])
        ]);
        featured_cars.push(parseCarListing(res.data["data"][i]));
      }
    });
    console.log(featured_cars);

  }, []);
  const [selectedBrand, setSelectedBrand] = React.useState("");
  const [searchConditions, setSearchConditions] = React.useState<searchCondition>({ wheels: [], gearbox: [], color: [], status: [] });
  function handleBrandOrModelChange(value: string, type: string) {
    if (type == "brand") {
      setSearchConditions({
        ...searchConditions,
        [type]: value,
        "model": ""
      });
    } else {
      setSearchConditions({
        ...searchConditions,
        [type]: value,
      });
    }
    console.log(searchConditions);
  }
  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value, type } = e.target;
    console.log(name);
    const parsedValue = type === 'number' ? parseFloat(value) : value;

    setSearchConditions({
      ...searchConditions,
      [name]: parsedValue
    });
    console.log(searchConditions);
  }
  function handleSelectChange(e: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    console.log(e);
    setSearchConditions({
      ...searchConditions,
      [name]: value
    });
  }
  return (
    <>
      <div className="mb-5">
        
        <div className="bg-blue-200 mx-auto border-2 border-blue-600 rounded-lg mt-5 w-11/12 md: lg:w-[1200px]">
          <div className="">

            {/*Autó kereső*/}
            <form action="/cars" method="get" className="w-fit">
              <div className="w-fit">
                <div className="my-3 lg:grid lg:grid-cols-5">
                  <input type="text" id="search" name="search" value={1} hidden readOnly />
                  <div className="place-self-center row-span-1">
                    <label htmlFor="brand">Márka: <br /> </label>
                    <BrandCB car_selection={cars} setSelectedBrand={setSelectedBrand} onInputChange={handleBrandOrModelChange} />
                    <input className="" type="text" id="brand" name="brand" value={searchConditions.brand || ""} hidden readOnly />
                  </div>

                  <div className="place-self-center row-span-1 w-full ml-3 mb-2">
                    <label htmlFor="model">Modell: <br /> </label>
                    <ModelCB car_selection={cars} selectedBrand={selectedBrand} onInputChange={handleBrandOrModelChange} />
                    <input type="text" id="model" name="model" value={searchConditions.model || ""} hidden readOnly />
                  </div>

                  <div className="place-self-center">
                    <label htmlFor="fuel">Üzemanyag: <br /> </label>
                    <select id="fuel" name="fuel" onChange={(e) => { handleSelectChange(e) }} className="border w-[360px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg lg:w-36">
                      <option value="">-</option>
                      <option value="Benzin">Benzin</option>
                      <option value="Dízel">Dízel</option>
                      <option value="Hibrid">Hibrid</option>
                      <option value="Elektromos">Elektromos</option>
                      <option value="Etanol">Etanol</option>
                      <option value="Biodízel">Biodízel</option>
                      <option value="Gáz">Gáz</option>
                    </select>
                  </div>

                  <div className="place-self-center">
                    <label htmlFor="year">Év: <br /> </label>
                    <input type="number" id="price" name="min_year" onChange={(e) => { handleInputChange(e) }} className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-tól" />
                    <input type="number" id="price" name="max_year" onChange={(e) => { handleInputChange(e) }} className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-sm inline-block" placeholder="-ig" />
                  </div>

                  <div className="place-self-center">
                    <label htmlFor="price">Vételár: <br /> </label>
                    <input type="number" id="price" name="min_price" onChange={(e) => { handleInputChange(e) }} className="border w-[180px] lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-block" placeholder="-tól" />
                    <input type="number" id="price" name="max_price" onChange={(e) => { handleInputChange(e) }} className="border w-[180px]  lg:w-[90px] py-3 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-block" placeholder="-ig" />
                  </div>
                  <button className="bg-blue-600 rounded-lg  place-self-end col-span-5 h-10 mt-5 w-full lg:w-52 text-white font-bold mr-5 text-center content-center  hvr-gwrow hvr-glow">
                    Keresés
                  </button>
                </div>
              </div>
            </form>
            {/*Autó kereső vége*/}

          </div>
        </div>

        {/*Kiemelt hírdetések*/}
        <div className="flex justify-center ">
          <div className=" w-[1200px] mt-20">
            <div className=" text-center text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
              Kiemelt hirdetések
            </div>

            <div className="  grid-flow-row grid lg:grid-cols-2 gap-4">
 
                {
                  featuredCars.map((car) => (

                    <div>
                      {car.featured == 0 && <MainCars car={car} />}{car.featured == 1 && <MainCarsHL car={car} />}
                    </div>
                    
                  ))
                }


            </div>

          </div>

        </div>
        {/*Kiemelt hyrdetések vége*/}

        {/*Gyakran keresett márkák*/}
        <div className="flex justify-center ">
          <div className="grid grid-cols-2 lg:grid-cols-4  mt-20">
            <div className="col-span-2 lg:col-span-4 text-center text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
              Gyakran keresett márkák
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-3 lg:col-span-4 md:grid-cols-4 place-self-center lg:gap-5 md:w-11/12 lg:w-full">

              <div className="col-span-1">
                <button>
                  <a href="">
                    <Card className="w-44 h-52 md:w-56 md:h-56 lg:w-[285px] lg:h-[228px] border-none hvr-outline-out ">
                      <CardHeader >
                        <Image src={"/logos/vw.png"} alt={"vw logo"} width={150} height={150} className="place-self-center hvr-icon" />
                        <CardTitle className="text-center text-lg lg:text-xl">Volkswagen</CardTitle>
                      </CardHeader>
                    </Card>
                  </a>
                </button>
              </div>

              <div className="col-span-1">
                <button>
                  <a href="/cars?search=1&brand=Audi">
                    <Card className="w-44 h-52 md:w-56 md:h-56 lg:w-[285px] lg:h-[228px] border-none hvr-outline-out ">
                      <CardHeader className="">
                        <Image src={"/logos/audi.png"} alt={"audi logo"} width={150} height={150} className="place-self-center hvr-icon" />
                        <CardTitle className="text-center text-lg lg:text-xl">Audi</CardTitle>
                      </CardHeader>
                    </Card>
                  </a>
                </button>
              </div>

              <div className="col-span-1">
                <button>
                  <a href="/cars?search=1&brand=BMW">
                    <Card className="w-44 h-52 md:w-56 md:h-56 lg:w-[285px] lg:h-[228px] border-none hvr-outline-out ">
                      <CardHeader >
                        <Image src={"/logos/bmw.png"} alt={"bmw logo"} width={150} height={150} className="place-self-center hvr-icon" />
                        <CardTitle className="text-center text-lg lg:text-xl">BMW</CardTitle>
                      </CardHeader>
                    </Card>
                  </a>
                </button>
              </div>

              <div className="col-span-1">
                <button>
                  <a href="/cars?search=1&brand=Mercedes-Benz">
                    <Card className="w-44 h-52  md:w-56 md:h-56 lg:w-[285px] lg:h-[228px] border-none hvr-outline-out ">
                      <CardHeader className="">
                        <Image src={"/logos/mercedes.png"} alt={"mercedes logo"} width={150} height={150} className="place-self-center hvr-icon" />
                        <CardTitle className="text-center text-lg lg:text-xl">Mercedes-Benz</CardTitle>
                      </CardHeader>
                    </Card>
                  </a>
                </button>
              </div>
            </div>

          </div>

        </div>
        {/*Gyakran keresett márkák vége*/}
      </div>

      <div className="mt-5">
        <Footer />
      </div>

    </>
  )
}