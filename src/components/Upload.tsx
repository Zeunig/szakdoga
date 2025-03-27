"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BrandCB } from "@/components/BrandCB";
import { ModelCB } from "@/components/ModelCB";
import { Input } from "@/components/ui/input";
import { DrivetypeCB } from "@/components/DriveTypeCB";
import { ConditionCB } from "@/components/ConditionCB";
import { Bug, Divide } from "lucide-react";
import { Textarea } from "@/components/TextArea";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useEffect } from "react";
import { ISortedCarSelection } from "@/app/jobs/carCounter/route";
import axios from "axios";

import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible"
import UploadLG from "./UploadLG";
import UploadSM from "./UploadSM";


function Unlocked(cars: ISortedCarSelection[]) {
    const [selectedBrand, setSelectedBrand] = React.useState("");
    return (
        <div>
                <UploadLG/>
                <UploadSM/>      
        </div>
    )
}

export default function Upload(cars: ISortedCarSelection[]) {
    const [limitReached, setLimitReached] = React.useState(false);
    const [banned, setBanned] = React.useState(false);
    useEffect(() => {
        axios.get("/api/my_profile?include_unlisted_cars=true").then((res) => {
            if(((parseInt(res.data["data"]["permissions"]) >>> 1) & 1) == 0) {
                // nincs végtelen feltöltése
                if(Object.values(res.data["data"]["car"]).length > 5) {
                    setLimitReached(true);
                }
            }
            if(((parseInt(res.data["data"]["permissions"]) >>> 2) & 1) == 0) {
                // ki van tiltva
                setBanned(true);
            }
        })
    }, [setLimitReached, setBanned]);
    return (
        limitReached
        ? <div>Túl sok autót töltöttél fel, kérjük vásárolj "Végtelen feltöltés"-t 8000 Ft-ért</div>
        : (banned ? <div>Ki vagy tiltva az oldalról</div> : <Unlocked {...cars}/>)

    );
}