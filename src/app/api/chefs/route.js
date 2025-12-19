import { connectDB } from "@/lib/db";
import Chef from "@/models/Chef";
import { NextResponse } from "next/server";


export async function POST(req) {
    try {
        await connectDB();
        const body = await req.json();


        const chef = await Chef.create({
            name: body.name,
            designation:body.designation,
            age: body.age,
            isActive: body.isActive ?? true,
        });


        return NextResponse.json(chef, { status: 201 });
    } catch (error) {
        console.error("POST /api/chefs error:", error);

        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }

}


export async function GET() {
    try {
        await connectDB();
        const chefs = await Chef.find().sort({ createdAt: -1 });
        return NextResponse.json(chefs);
    } catch (error) {
        console.error("GET /api/chefs error:", error);

        return NextResponse.json(
            { message: error.message },
            { status: 500 }
        );
    }

}