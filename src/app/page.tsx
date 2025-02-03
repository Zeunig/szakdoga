import Image from "next/image";
import { Header } from "@/components/Header";

import { Footer } from "@/components/Footer";

export default function Home() {
  
  return (
    <div id="main">
      <div className='mainimage'>
        <Header/> 
        <div className="container mx-auto mt-4 h-full flex justify-around flex-col ">
          <h1 className="text-3xl md:text-6xl font-extrabold text-white text-center main-text-shadow">Körpörgő Autókereskedés</h1>
      
        </div>
        <Footer/>
      </div>
    </div>
  )
}
