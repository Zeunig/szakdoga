import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'
import { secretKey } from "./app/api/auth/login/route";
const jose = require('jose')

export const config = {
    //matcher: ['/((?!_next/static|_next/image|.*\\.png$).*)'],
    matcher: ['/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)']
}
const privateRoutes = ["/api/marketplace/publish","/publish"];

export default async function middleware(request: NextRequest) {
    const isPrivateRoute = privateRoutes.includes(request.nextUrl.pathname);
    console.log(isPrivateRoute);
    if(isPrivateRoute) {
        const cookie = (await cookies()).get('auth')?.value
        const verification = await jose.jwtVerify(cookie, secretKey, {
            issuer: "urn:zeunig:issuer",
            audience: "urn:zeunig:audience"
        });
    }
    return NextResponse.redirect(new URL("/", request.url))
}