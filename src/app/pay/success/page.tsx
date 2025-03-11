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
        <div>yippee :D</div>
    )
}