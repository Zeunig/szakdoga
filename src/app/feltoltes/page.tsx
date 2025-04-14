"use server";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BrandCB } from "@/components/BrandCB";
import { ModelCB } from "@/components/ModelCB";
import { Input } from "@/components/ui/input";
import { DrivetypeCB } from "@/components/DriveTypeCB";
import { ConditionCB } from "@/components/ConditionCB";
import { Bug } from "lucide-react";
import { Textarea } from "@/components/TextArea";
import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";
import { get_car_selection } from "../jobs/carCounter/route";
import Upload from "@/components/Upload";



export default async function Page() {
    let cars = await get_car_selection();
    return (
        <div className="flex flex-col h-screen">
            <div><Header /></div>

            <div>{typeof window !== 'undefined' && <Upload {...cars} />} </div>
            
            <div><Footer /></div>
        </div>

    )

}