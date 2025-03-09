import { NextRequest, NextResponse } from "next/server";
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);


export async function POST(req: NextRequest) {
    try {
        var body = await req.json();
    }catch(e) {
        let resp = NextResponse.json({"success":false, "message": `Hibás adat`}, {"status": 400});
        return resp;
    }
    let product_id = parseInt(body["product_id"]);
    if(Number.isNaN(product_id)) {
        let resp = NextResponse.json({"success":false, "message": `Hiányzó Product ID`}, {"status": 400});
        return resp;
    }
    switch(product_id) {
        case 1:
            // Kiemelés
            let car_id = parseInt(body["car_id"]); // majd megnézni h a car_id a tulajdonoshoz tartozik v nem
            if(Number.isNaN(product_id)) {
                let resp = NextResponse.json({"success":false, "message": `Hiányzó Car ID`}, {"status": 400});
                return resp;
            }
            var session = await stripe.checkout.sessions.create({
                success_url: `http://localhost:3000/pay/success`, // TODO : mindig jó domain
                line_items: [
                  {
                    price: 'price_1R0kMWQetjTlAjyTl37eq5py',
                    quantity: 1,
                  },
                ],
                metadata: {
                    "user_id": req.headers.get("x-user-id"),
                    "car_id": car_id
                },
                mode: 'payment',
            });
            console.log(session);
            return NextResponse.redirect(session["url"], {status: 302});
        case 2:
            // Korlátlan autó feltöltés
            var session = await stripe.checkout.sessions.create({
                success_url: `http://localhost:3000/pay/success`, // TODO : mindig jó domain
                line_items: [
                  {
                    price: 'price_1R0kNAQetjTlAjyTb8PLkGzK',
                    quantity: 1,
                  },
                ],
                metadata: {
                    "user_id": req.headers.get("x-user-id")
                },
                mode: 'payment',
            });
            return NextResponse.redirect(session["url"], {status: 302});
    }
}