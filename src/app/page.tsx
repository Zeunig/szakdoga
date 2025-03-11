import Image from "next/image";
import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"


export default function Home() {

  return (
    <div className="flex flex-col h-screen">

      <div>
        <Header />
      </div>

      <div>
        <div className="mx-auto border-2 border-slate-300 rounded-lg mt-5 w-[450px] max-h-[650px]  lg:w-[1300px] min">
          <div className="grid grid-rows-2 grid-cols-3 lg:grid-cols-5">

            {/*Cím*/}
            <div className=" text-2xl row-start-1 col-span-3 lg:col-span-5 text-center font-bold mt-20 mb-20">Autó keresése</div>
            {/*Cím vége*/}


            {/*Autó kereső*/}
            <div className="row-start-2 col-span-5 grid grid-cols-5 ">
              <div className="col-start-2 col-span-3 grid grid-cols-6 grid-rows-4">

                <div className=" row-start-2 bg-red-600 flex items-center">
                  <p className="text-xl">Márka</p>
                </div>
                <div className=" row-start-2 bg-green-600 flex items-center">
                  <p className="text-xl">Model</p>
                </div>
                <div className=" row-start-2 bg-violet-600 flex items-center">
                  <p className="text-xl">Kivitel</p>
                </div>
                <div className=" row-start-2 bg-teal-600 flex items-center">
                  <p className="text-xl">Üzemanyag</p>
                </div>
                <div className=" row-start-2 bg-yellow-600 flex items-center">
                  <p className="text-xl">Váltó </p>
                </div>
                <div className=" row-start-2 bg-lime-600 flex items-center">
                  <p className="text-xl">Ajtók száma</p>
                </div>

                <div className="row-start-3 col-span-2 bg-teal-600 flex items-center">
                  <p className="text-xl">Vételár:</p>
                </div>
                <div className="row-start-3 col-span-2 bg-green-600 flex items-center">
                  <p className="text-xl">Gyártási év:</p>
                </div>
                <div className="row-start-3 bg-violet-600 flex items-center justify-center">

                </div>
                <div className="row-start-3  flex items-center justify-center">
                  <button className="bg-blue-600 h-10 w-24 rounded-sm  hover:bg-blue-400 transform hover:duration-300 duration-500">Keresés</button>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center   ">
          <div className="grid grid-cols-4 gap-3  w-[1200px] mt-20">
            <div className="col-span-4 text-center text-4xl font-bold text-blue-600 mb-4"> Gyakran keresett márkák</div>

            <div className="">
              <button>
                <a href="">
                  <Card className=" w-[289px] border-none hvr-outline-out">
                    <CardHeader >
                      <Image src={"/logos/vw.png"} alt={"vw logo"} width={150} height={150} className="place-self-center"/>
                      <CardTitle className="text-center text-xl">Volkswagen</CardTitle>
                    </CardHeader>
                  </Card>
                </a>
              </button>
            </div>

            <div className="">
              <button>
                <a href="">
                  <Card className=" w-[289px] border-none hvr-outline-out">
                    <CardHeader className="">
                      <Image src={"/logos/audi.png"} alt={"audi logo"} width={150} height={150} className="place-self-center"/>
                      <CardTitle className="text-center text-xl">Audi</CardTitle>
                    </CardHeader>
                  </Card>
                </a>
              </button>
            </div>

            <div className="">
              <button>
                <a href="">
                  <Card className=" w-[289px] border-none hvr-outline-out">
                    <CardHeader >
                      <Image src={"/logos/bmw.png"} alt={"bmw logo"} width={150} height={150} className="place-self-center"/>
                      <CardTitle className="text-center text-xl">BMW</CardTitle>
                    </CardHeader>
                  </Card>
                </a>
              </button>
            </div>

            <div className="">
              <button>
                <a href="">
                  <Card className=" w-[289px] border-none hvr-outline-out">
                    <CardHeader className="">
                      <Image src={"/logos/mercedes.png"} alt={"mercedes logo"} width={150} height={150} className="place-self-center"/>
                      <CardTitle className="text-center text-xl">Mercedes-Benz</CardTitle>
                    </CardHeader>
                  </Card>
                </a>
              </button>
            </div>

          </div>

        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  )
}
