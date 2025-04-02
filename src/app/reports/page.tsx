"use server";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ReportOverviewPage from "@/components/ReportOverviewPage";
import { HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ICarListing } from "@/lib/car";
import { PrismaClient } from "@prisma/client";
import { HoverCard } from "@radix-ui/react-hover-card";
import { Hammer, Info, X } from "lucide-react";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export interface Report {
    reason: string,
    reporter_ip: string,
    solved: number | null,
    car: ICarListing
}

export default async function Page() {
    const header = await headers();
    const prisma = new PrismaClient();
    var user_query = await prisma.user.findFirst({
        where: {
            id: parseInt(header.get("x-user-id") || "0")
        },
    });
    if ((Number(user_query?.permissions) >>> 0 & 1) != 1) {
        console.log("meow");
        return (
            <h1>Nincs hozzáférésed</h1>
        );
    }
    let reports: Report[] = await prisma.report.findMany({
        where: {
            solved: 1
        },
        include: {
            car: {
                include: {
                    user: {
                        include: {
                            password: false
                        }
                    },
                    car_image_relation: true
                }
            }
        }
    });
    console.log(reports);
    return (
        <div className="flex flex-col h-screen">
            <div>
                <Header />
            </div>


            <div className="mt-20 bg-slate-900 bg-opacity-15 rounded-lg mx-auto w-[1300px]">
                <div className=" mt-5 mx-5   grid grid-cols-2">
                    <p className="text-3xl text-start font-semibold text-blue-600">Jelentett Hírdetések </p>
                    <div className="content-center">
                        <HoverCard>
                            <HoverCardTrigger className=""> <Info className="place-self-end text-blue-600" /> </HoverCardTrigger>
                            <HoverCardContent className="w-fit mt-4 ml-[320px] border-2 border-blue-400 bg-blue-100">
                                <div>
                                    <div className="grid grid-cols-2 grid-rows-3 ">

                                        <div className="col-span-2">
                                            Jelmagyarázat
                                            <hr className="w-full h-px mx-auto  mb-2 bg-slate-400 border-0" />
                                        </div>

                                        <p className="row-start-2 col-start-1">Hirdetés törlése </p>
                                        <p className="col-start-2 text-red-600" > <X className="place-self-center"/> </p>
                                        <p className="row-start-3 col-start-1">Felhasználó kitiltása </p>
                                        <p className="col-start-2 text-red-900"> <Hammer className="place-self-center"/> </p>
                                    </div>
                                </div>
                            </HoverCardContent>


                        </HoverCard>
                    </div>
                    <hr className="w-full col-span-2 h-px   mb-2 bg-slate-400 border-0" />
                </div>
                
                <ReportOverviewPage reports={reports} />
            </div>


            <div className="my-auto">
                <Footer />
            </div>
        </div>
    )
}