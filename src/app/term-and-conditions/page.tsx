import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Page() {
    return (
        <div className="flex flex-col h-screen ">

            <div>
                <Header/>
            </div>

            <div className="my-auto">

            </div>
            
            <div className="my-auto">
                <Footer />
            </div>

        </div>
    )
}