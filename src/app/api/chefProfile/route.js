import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import ChefProfile from "@/models/ChefProfile";


// CREATE CHEF PROFILE
export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();

    if (!body.chef) {
      return NextResponse.json(
        { message: "Chef ID is required" },
        { status: 400 }
      );
    }

    // Prevent duplicate profile
    const exists = await ChefProfile.findOne({ chef: body.chef });
    if (exists) {
      return NextResponse.json(
        { message: "Chef profile already exists" },
        { status: 409 }
      );
    }

    const profile = await ChefProfile.create({
      chef: body.chef,
      email: body.email,
      address: body.address,
      highestQualification: body.highestQualification,
      experienceYears: body.experienceYears,
      specialization: body.specialization,
    });

    return NextResponse.json(profile, { status: 201 });

  } catch (error) {
    console.error("POST /api/chefProfile", error);
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}


// GET ALL CHEF PROFILES (WITH CHEF BASIC INFO)
export async function GET() {
  try {
    await connectDB();

    const profiles = await ChefProfile.find()
      .populate("chef", "name address highestQualification age isActive")
      .sort({ createdAt: -1 });

    return NextResponse.json(profiles);

  } catch (error) {
    console.error("GET /api/chefProfile", error);
    return NextResponse.json(
      { message: error.message },
      { status: 500 }
    );
  }
}

