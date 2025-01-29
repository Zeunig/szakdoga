import { CarCard } from "@/components/CarCard"
import { CarCardH } from "@/components/CarCardH"
import { CarSearchCard } from "@/components/CarSearchCard"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { Rows } from "lucide-react"


export default function Page() {
    return (
        <div>
            <Header/>
            <div className="mx-56 mt-24 col-2 bg-indigo-800">
                <CarSearchCard/>
                
            </div>
            <Footer/>
        </div>
        
    )
}