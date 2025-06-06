"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NextRequest } from "next/server";
import { useEffect } from "react";



export default function Page(req: NextRequest) {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const redirect = urlParams.get('redirect_to');
        setTimeout(() => {
            window.location.href = redirect ?? "/";
        }, 3000);
    })
    return (
        <div className="flex h-screen items-center justify-center ">

            <Card className="w-96 h-[500px] bg-blue-100 border-2 border-blue-600 ">
                <CardHeader>
                <div className="place-self-center">
                    <img src="/logo.png" className=" h-[120px] w-[120px]" alt="KPAK Logo" />
                </div>
                
                </CardHeader>
                <div>
                    <CardContent className="text-center">
                        <CardTitle className="text-3xl font-bold">
                            Sikeres Fizetés!
                        </CardTitle>
                        <p className="text-base mt-3 mb-3 font-medium">Köszönjuk vásárlásod!</p>
                        <p className="text-sm font-medium">A tranzakciót feldolgoztuk és hamarosan átirányítjuk Önt a főoldalra.</p>
                    </CardContent>
                    <div className="flex justify-center">
                        
                        
                    </div>
                </div>
            </Card>




        </div>
    )
}