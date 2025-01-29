import AuthTabs from "@/components/AuthTab";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
    return ( 
        <div> 
            <Header/>
            <div id="bg" className="h-400 mb-64 ">
                <AuthTabs/>
            </div>   
            <Footer/>   
        </div>
    )}