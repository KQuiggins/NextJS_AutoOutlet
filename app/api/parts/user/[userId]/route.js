import { NextResponse } from "next/server";
import connectDb from "@/config/db";
import Part from "@/models/Part";

// GET /api/parts/user/:userId
export const GET = async (request, {params}) => {

    await connectDb();

    const userId = params.userId;
    

    if (!userId) {
      return new NextResponse("User ID is required", { status: 400 });
    }

    const parts = await Part.find({part_owner: userId});


    return NextResponse.json(parts);

};