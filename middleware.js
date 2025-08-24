import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(req) {
    const tokenCookie = req.cookies.get('token');
    const token = tokenCookie?.value;

    if (!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    try {
        await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET));
        return NextResponse.next();
    } catch (err) {
        console.error("JWT verification failed:", err);
        return NextResponse.redirect(new URL('/login', req.url));
    }
}

export const config = {
    matcher: ['/admin', '/admin/:path*']
};
