import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { AdsData } from "./AdsData"
export function AdsGrid(){
    return (
        <div className="grid grid-cols-2 grid-rows-2 w-fit">


            <div className="bg-indigo-500">
                <AdsData/>                
            </div>

            <div className="bg-indigo-500">
                <AdsData/>
            </div>

            <div className="bg-indigo-500">
                <AdsData/>
            </div>

            <div className="bg-indigo-500">
                <AdsData/>
            </div>

        </div>
    )
}