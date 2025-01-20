import { CarCard } from "@/components/CarCard"
import { CarCardH } from "@/components/CarCardH"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"


export default function Page() {
    return (
        <div>
            <Header/>
            <div>
                <div className="grid grid-cols-3 border-4 border-blue-500"> 
                        <div className="row-span-2 border-4 border-blue-500">
                            <CarCardH />
                        </div>

                        <div>
                            <CarCard/>
                        </div>

                        <div>
                            <CarCard/>
                        </div>

                        <div>
                            <CarCard/>
                        </div>

                        <div>
                            <CarCard/>
                        </div>
                </div>
            </div> 
            <div>

            </div>
            <Footer/>
        </div>
        
    )
}