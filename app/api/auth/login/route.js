import { SignJWT } from "jose";
import { NextResponse } from "next/server";
import { compare } from "bcrypt";
import { cookies } from "next/headers";

const getJwtSecret = () => new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(req) {
    // ? Password like in database (no database, so I have to do it this way)
    const dbPassword = '$2b$05$w1zzQGpCfTnxSFXMNyBwjuHnxJcsU1f5VwbveV/.GKDlrWbVopPCG';

    // * Lets just get the password and compare it!
    const data = await req.json();
    const password = data.password;
    const username = data.username;

    // * Cant login without password or username mate...
    if(password == null || password == undefined || username == null || username == undefined) {
        return NextResponse.json({ message: 'Fill up username and password' , status: 401 });
    }

    // ? Check if the hashed password is same as our form password
    const isMatch = await compare(password, dbPassword);

    if(!isMatch || username != 'admin') {
        return NextResponse.json({ message: 'Invalid credentials' , status: 401 });
    } else {
        const cookies_ = await cookies();
        const token = await new SignJWT({ username })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(getJwtSecret())

        cookies_.set({
            name: 'token',
            value: token,
            httpOnly: true,
            maxAge: 60 * 60 * 24,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });

        return NextResponse.json({ message: 'Login has been successfull' , status: 200, jwt: process.env.JWT_SECRET });    
    }
}