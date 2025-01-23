import { NextRequest } from "next/server";

export const config = {
    matcher: [
        "/((?!_next|assets).*?)"
    ]
};

export async function middleware(request: NextRequest) {
    console.log(request.url);
}