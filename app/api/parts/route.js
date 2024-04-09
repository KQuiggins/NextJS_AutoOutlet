import { NextResponse } from "next/server";
import connectDb from "@/config/db";
import Part from "@/models/Part";

// GET /api/parts
export const GET = async (request) => {

    try {

        await connectDb();

        const parts = await Part.find({});
        console.log(parts);

        console.log("GET request received");

        return NextResponse.json(parts);
    } catch (error) {
        console.error("GET request failed", error);
        return new Response("GET request failed", { status: 500 });
    }
};



