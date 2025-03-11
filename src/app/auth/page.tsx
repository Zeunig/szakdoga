import AuthTabs from "@/components/AuthTab";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";


import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
    return ( 
        <div> 
            <Header/>
            <div className="mt-10">
                <AuthTabs/>
            </div>   
            <Footer/>   
        </div>
    )}