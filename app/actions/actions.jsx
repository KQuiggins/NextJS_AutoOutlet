"use server";
import connectDb from "@/config/db";
import Part from "@/models/Part";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/utils/authOptions";

import mongoose from "mongoose";

export const formAction = async (formData) => {
  try {
    await connectDb();

    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response("Unauthorized", { status: 401 });
    }

    const userId = session.user.id;

    console.log("Form data", formData);
    console.log("Session", session);
    console.log("User ID", userId);

    ;

    // Creating the part object to pass to the model
    const partData = {
      part_owner: userId,
      part_name: formData.get("partName") || "",
      price: formData.get("partPrice") || "",
      description: formData.get("partDescription") || "",
      car: formData.get("carModel") || "",
      year: formData.get("carYear") || "",
      imageUrl: formData.get("images") || "",
      location: {
        street: formData.get("street") || "",
        city: formData.get("city") || "",
        state: formData.get("state") || "",
        zip: formData.get("zipcode") || "",
      },
    };
    console.log(partData);
    console.log(session.user.id);

    // Creating a new part
    const part = new Part(partData);
    await part.save();


  } catch (error) {
    console.error("Form request failed", error);

  }
};
