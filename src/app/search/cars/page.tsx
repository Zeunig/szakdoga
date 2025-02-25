import { CarSearchCard } from "@/components/CarSearchCard"
import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import Rowcard from "@/components/RowCard"
import RowCardHL from "@/components/RowCardHL"




export default function Page() {
    return (
        <div>
            <Header />
            <div>
                <div className="">
                    <div className="mx-5 lg:mx-56 lg:mt-24">
                        <div className="grid grid-cols-1 lg:grid-cols-4">
                            <div className="h-auto row-span-11"><CarSearchCard /></div>
                            <div className="col-span-3">
                                <div className="mb-3"><RowCardHL /></div>
                                <div className="mb-3"><Rowcard /></div>
                                <div className="mb-3"><Rowcard /></div>
                                <div className="mb-3"><Rowcard /></div>
                                <div className="mb-3"><Rowcard /></div>
                                <div className="mb-3"><Rowcard /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}