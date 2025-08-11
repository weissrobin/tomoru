import { getMenu } from "@/lib/database";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { category } = await request.json();
    const menu = await getMenu(category);
    return NextResponse.json(menu, { status: 200 });
}