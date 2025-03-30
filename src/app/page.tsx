import Image from "next/image";
import Autoplay from "embla-carousel-autoplay"
import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible"
import { Badge } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { plugin } from "postcss";

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
            <div className="w-fit">
              <div className="w-fit">
                <div className="mx-3 my-3 lg:grid lg:grid-cols-5">

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
        </div>

        {/*Kiemelt hírdetések*/}
        <div className="flex justify-center ">
          <div className=" w-[1200px] mt-20">
            <div className=" text-center text-3xl lg:text-4xl font-bold text-blue-600 mb-4">
              Kiemelt hírdetésel
            </div>

            <div className="col bg-rose-400 grid grid-cols-4 grid-rows-2 gap-4">

              <div className="col-span-2 row-span-2 bg-blue-400"> 0</div>
              <div className=" bg-blue-400"> 1</div>
              <div className=" bg-blue-400"> 2</div>
              <div className=" bg-blue-400"> 3</div>
              <div className=" bg-blue-400"> 4</div>
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
                  <a href="">
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
                  <a href="">
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
                  <a href="">
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

    </div>
  )
}
