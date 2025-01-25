import { NextResponse } from "next/server";
import connectDb from "@/config/db";
import Part from "@/models/Part";

// GET /api/parts
export const GET = async (request) => {

    await connectDb();

    const parts = await Part.find({});

    return NextResponse.json(parts);
  
};






