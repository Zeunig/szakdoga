"use server";

import { PrismaClient } from "@prisma/client";
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
            const prisma = new PrismaClient();
            if(checkoutSession["metadata"]["car_id"] === undefined) {
                // Korlátlan autó feltöltés
                let user_obj = await prisma.user.findFirst({
                    where: {
                        id: parseInt(checkoutSession["metadata"]["user_id"] as string)
                    }
                });
                var permissions = user_obj?.permissions ?? BigInt(0)
                var new_permissions = permissions |= BigInt(2);
                await prisma.user.update({
                    where: {
                        id: parseInt(checkoutSession["metadata"]["user_id"] as string)
                    },
                    data: {
                        permissions: new_permissions
                    }
                })
            }else {
                // Autó kiemelés
                await prisma.car.update({
                    where: {
                        id: parseInt(checkoutSession["metadata"]["car_id"] as string)
                    },
                    data: {
                        featured: 1
                    }
                });
            }
            console.log(checkoutSession["metadata"]["asd"]);
            console.log(checkoutSession["metadata"]["user_id"]);
            
        }
    }
    return NextResponse.json({}, {status: 200});
}