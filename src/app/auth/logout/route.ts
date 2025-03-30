import { NextResponse } from "next/server";

export async function GET(req: Request) {
    let resp = NextResponse.redirect(new URL("/", req.url));
    resp.cookies.set("auth","", {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: "/",
        maxAge: 0
    });
    // TODO: refresh tokens
    return resp;
}