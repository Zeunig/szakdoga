"use server";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    var json = await req.json();
    console.log(json["type"]);
    if((json["type"] as string).includes("checkout.session.completed") || (json["type"] as string).includes('checkout.session.async_payment_succeeded')) {
        // sikeres fizetés odaadjuk neki azt a szart
        const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
        const checkoutSession = await stripe.checkout.sessions.retrieve(json["data"]["object"]["id"], 
            { expand: ['line_items']}
        );
        if(checkoutSession["payment_status"] == "paid") {
            console.log(checkoutSession);
        }
    }
    return NextResponse.json({}, {status: 200});
}