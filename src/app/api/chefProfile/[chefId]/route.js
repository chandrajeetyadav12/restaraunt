import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import ChefProfile from "@/models/ChefProfile";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { chefId } = await params; //from URL

    const profiles = await ChefProfile.find({ chef: chefId })
      .populate("chef", "name address highestQualification age isActive")
      .sort({ createdAt: -1 });

    return NextResponse.json(profiles);
  } catch (error) {
    console.error("GET /api/chefProfile/[chefId]", error);
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}
