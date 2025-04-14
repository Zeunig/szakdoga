// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AuthResult } from './lib/auth';
import * as jose from 'jose';
export const config = {
    matcher: [
      // Match /api/ paths but exclude /api/car/
      //'/(api(?!/car/|/auth/|/pay/webhook)(?:/?|/.*))',
      // Match /profile/ paths
      '/profil/:path*',
      '/feltoltes',
      '/reports',
      '/cars/:path'
    ]
  }



async function getSecretKey() {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(process.env.JWT_SECRET);

    return await crypto.subtle.importKey(
        "raw", // Key format
        keyData,
        { name: "HMAC", hash: { name: "SHA-256" } }, // Algorithm options
        false, // Not extractable
        ["sign", "verify"] // Usages
    );
}

async function authentication(token: string): Promise<AuthResult> {
    try {
        const { payload, protectedHeader } = await jose.jwtVerify(token, await getSecretKey(), {
            issuer: "urn:zeunig:issuer",
            audience: "urn:zeunig:audience"
        });
        return { 
            success: true,
            payload: payload,
            protectedHeader: protectedHeader
        }
    }catch {
        return {success: false, payload: {}, protectedHeader: {alg: "invalid"}};
    }

}

// Middleware function that runs before matching routes
export async function middleware(request: NextRequest) {
    console.log(request.nextUrl.pathname);
    const token = request.cookies.get('auth')?.value;
    if(request.nextUrl.pathname.includes("/cars")) {
        try {
            if(typeof token === 'string') {
                let auth = await authentication(token); // akkor halj éhen a hibáddal
                if (auth["success"] == true) {
                    const response = NextResponse.next();
                    response.headers.set("x-user-id", auth["payload"]["id"] as string);
                    return response
                }else {
                    const response = NextResponse.next();
                    return response;
                }
            }else {
                const response = NextResponse.next();
                return response;
            }  
        }catch {
            const response = NextResponse.next();
            return response;
        }
    }
    if (!token) {
        if (request.nextUrl.pathname.startsWith("/api")) {
            return NextResponse.json({"error":"Unauthorized"},{"status": 401});
        }else {
            return NextResponse.redirect(new URL('/auth',request.url));
        }
    }
    try {
        let auth = await authentication(token);
        if (auth["success"] == true) {
            const response = NextResponse.next();
            response.headers.set("x-user-id", auth["payload"]["id"] as string);
            console.log(response.headers.get("x-user-id"));
            return response
        }else {
            if (request.nextUrl.pathname.startsWith("/api")) {
                return NextResponse.json({"error":"Unauthorized"},{"status": 401});
            }else {
                return NextResponse.redirect(new URL('/auth',request.url));
            }
        }
        
    }catch(err) {
        console.log(err);
        if (request.nextUrl.pathname.startsWith("/api")) {
            return NextResponse.json({"error":"Unauthorized"},{"status": 401});
        }else {
            return NextResponse.redirect(new URL('/auth',request.url));
        }
    }finally {
    }
}