"use client";

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
        <div>   
             <div style={{backgroundImage: "url('https://media.tenor.com/nVsVEfzCGQMAAAAi/confetti.gif')"}} className="rounded-xl h-96">
             <h1>ts fizetés lowkey sikeres volt 🥀</h1>
             </div>
        </div>
    )
}