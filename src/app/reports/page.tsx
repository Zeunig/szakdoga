"use server";

import ReportOverviewPage from "@/components/ReportOverviewPage";
import { ICarListing } from "@/lib/car";
import { PrismaClient } from "@prisma/client";
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
    if((Number(user_query?.permissions) >>> 0 & 1) != 1) {
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
        <div>
            <ReportOverviewPage reports={reports}/>
        </div>
    )
}