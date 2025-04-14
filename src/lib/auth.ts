import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import * as jose from 'jose';

const { createSecretKey } = require('crypto');
export const secretKey = createSecretKey(process.env.JWT_SECRET, 'utf-8');



export interface AuthResult {
    success: boolean,
    payload: jose.JWTPayload,
    protectedHeader: jose.JWTHeaderParameters
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

export async function authentication(token: string): Promise<AuthResult> {
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