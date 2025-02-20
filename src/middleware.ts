// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as jose from 'jose';
import { authentication } from './lib/auth';
export const config = {
    matcher: [
      // Match /api/ paths but exclude /api/car/
      '/(api(?!/car/|/auth/)(?:/?|/.*))',
      // Match /profile/ paths
      '/profile/:path*'
    ]
  }




// Middleware function that runs before matching routes
export async function middleware(request: NextRequest) {
    console.log(request.url);
    const token = request.cookies.get('auth')?.value;
    if (!token) {
        return NextResponse.redirect(new URL('/auth',request.url));
    }
    try {
        let auth = await authentication(token);
        if (auth["success"] == true) {
            const response = NextResponse.next();
            response.headers.append("x-user-id", auth["payload"]["id"] as string);
            console.log(response.headers.get("x-user-id"));
            return response
        }else {
            return NextResponse.redirect(new URL('/auth',request.url));
        }
        
    }catch(err) {
        console.log(err);
        return NextResponse.redirect(new URL('/auth',request.url));
    }finally {
    }
}