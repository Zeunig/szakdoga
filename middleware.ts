import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { secretKey } from './src/app/api/auth/login/route';
const jose = require('jose')

/*export const config = {
  matcher: [
    // Match /api/ paths but exclude /api/car/
    '/(api(?!/car/)(?:/?|/.*))',
    // Match /profile/ paths
    '/profile/:path*'
  ]
}*/
export default async function middleware(request: NextRequest) {
  console.log(request.url);
  const token = request.cookies.get('auth')?.value;
  if (!token) {
    return NextResponse.redirect(new URL('/auth',request.url));
  }
  try {
    const { payload, protectedHeader } = await jose.verifyJWT(token, secretKey, {
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
 