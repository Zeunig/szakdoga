import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import Image from "next/image";
export function AdsData() {
    return (
        <div className="grid grid-cols-1 border-2 rounded-md">
            <div className="col-end-1">
                <Image src="/arteon.jpg" width={200} height={1} alt="Missing image"/>
            </div>
            <div className="">
                <h1 className="font-bold">Volkswagen - Arteon</h1>
                <h1 className="font-bold">888 888 888 Ft</h1>
                <hr/>
                <p>888 888 km</p>
                <p>888 888 km</p>
                <p>888 888 km</p>
            </div>
        </div>
    )
}