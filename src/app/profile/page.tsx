import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ProfileTabs from "@/components/ProfileTabs";

export default function Page(){
    return(
        <div >
        <Header/> 
        <div className="h-400 mb-60 w-50 bg-blue-400">
            <div>
                <ProfileTabs/>
            </div>
        </div>
        <Footer/>
      </div>
  
    )
}