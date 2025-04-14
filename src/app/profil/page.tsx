"use server"

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs";
import MyCars from "@/components/MyCars";
import { cookies } from 'next/headers';
import { authentication } from "@/lib/auth";
import { ICarListing, parseCarListing } from "@/lib/car";
import RowCard from "@/components/RowCard";
import { Badge } from "@/components/ui/badge";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import { ArrowUpFromLineIcon, Cog, Heart, MoveDown, TriangleAlert, User, UserCircle, UserCogIcon } from "lucide-react";
import { Cog6ToothIcon } from "@heroicons/react/24/solid";
import React from "react";
import Profile from "@/components/Profile";
import { get_my_profile } from "@/lib/profile";


export default async function Page() {

    const auth_cookie = (await cookies()).get("auth");
    if (auth_cookie === undefined) {
        console.error("TODO: redirect /auth");
        return;
    } else {
        let auth = await authentication(auth_cookie.value);
        if (auth["success"] == true) {
            var profile = await get_my_profile(auth["payload"]["id"] as unknown as number, true);
            console.log(profile);
        } else {
            return;
        }
    }
    var cars = profile["car"] as ICarListing[];
    var favorites = profile["favorites"] as ICarListing[];
    console.log(favorites);
    return (
        <div className="flex flex-col h-screen  ">

            <div>
                <Header />
            </div>
            <div className="mb-20">
                <Profile profile={profile}/>
            </div>

            <div className="mt-auto">
                <Footer />
            </div>
        </div>

    )
}