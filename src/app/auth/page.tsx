import AuthTabs from "@/components/AuthTab";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
    return (
        <div className="flex flex-col h-screen">

        <div> 
            <Header/>
        </div>

            <div>
            <div className="h-[700px] bg-blue-50">
                <AuthTabs/>
            </div>   
            </div>   

        <div>
            <Footer/>   
        </div>

        </div>
    )}