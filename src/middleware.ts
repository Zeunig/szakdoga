// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
const jose = require('jose')

export const config = {
    matcher: [
      // Match /api/ paths but exclude /api/car/
      '/(api(?!/car/|/auth/)(?:/?|/.*))',
      // Match /profile/ paths
      '/profile/:path*'
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

// Middleware function that runs before matching routes
export async function middleware(request: NextRequest) {
    console.log(request.url);
    const token = request.cookies.get('auth')?.value;
    if (!token) {
        return NextResponse.redirect(new URL('/auth',request.url));
    }
    try {
        const { payload, protectedHeader } = await jose.verifyJWT(token, await getSecretKey(), {
        issuer: "urn:zeunig:issuer",
        audience: "urn:zeunig:audience"
        });
        console.log(payload);
        console.log(protectedHeader);
        const response = NextResponse.next()
        return response
    }catch {
        return NextResponse.redirect(new URL('/auth',request.url));
    }finally {
        const response = NextResponse.next()
        return response
    }
}