import { NextResponse } from "next/server";
import connectDb from "@/config/db";
import Part from "@/models/Part";

// GET /api/parts/user/:userId
export const GET = async (request, {params}) => {
  try {
    await connectDb();

    const userId = params.userId;
    // console.log(userId);

    if (!userId) {
      return new NextResponse("User ID is required", { status: 400 });
    }

    const parts = await Part.find({part_owner: userId});
    console.log(parts);

    return NextResponse.json(parts);
  } catch (error) {
    console.error("GET request failed", error);
    return new Response("GET request failed", { status: 500 });
  }
};