import Image from "next/image";
import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";

export default function Home() {

  return (
    <div>
      <Header />

      <div className="container mx-auto mt-4 h-fit justify-around flex-col bg-[url(/mainbg.png)]  grid grid-rows-7">
        <h1 className="row-start-3 text-3xl h-20 mt-2 md:text-6xl font-extrabold text-white text-center main-text-shadow">Körpörgő Autókereskedés</h1>

        <div className="row-start-5 grid grid-cols-3"> 
          <button className="col-start-1 bg-opacity-50 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-100 hover:to-slate-300 text-white hover:text-black border-2  rounded-lg transform transition duration-250 hover:scale-110  ">Sell</button>

          <button className="col-start-3 border-2 border-slate-300 rounded-lg transform transition duration-250 hover:scale-110 hover:bg-blue-400">Purchase</button>
        </div>
      </div>
      <div>

      </div>

      <Footer />
    </div>
  )
}
