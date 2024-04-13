import { NextResponse } from "next/server";
import connectDb from "@/config/db";
import Part from "@/models/Part";

// GET /api/parts/:id
export const GET = async (request, { params }) => {
  try {
    await connectDb();

    const part = await Part.findById(params.id);

    if (!part) return new NextResponse("Part not found", { status: 404 });

    return NextResponse.json(part);
  } catch (error) {
    console.error("GET request failed", error);
    return new Response("GET request failed", { status: 500 });
  }
};
