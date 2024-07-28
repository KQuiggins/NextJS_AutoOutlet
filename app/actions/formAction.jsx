"use server";
import connectDb from "@/config/db";
import { getSessionUser } from "@/utils/getSessionUser";
import Part from "@/models/Part";
import User from "@/models/User";
import cloudinary from "@/config/cloudinary";
import { revalidatePath } from "next/cache";

export const formAction = async (formData) => {
  await connectDb();

  const sessionUser = await getSessionUser();

  if (!sessionUser) {
    console.log("User not found");
    return;
  }

  const user = await User.findOne({ email: sessionUser.user.email });

  if (!user) {
    console.log("User not found");
    return;
  }

  const images = formData.getAll("images").filter((image) => image.name !== "");

  // Creating the part object to pass to the model
  const partData = {
    part_owner: user._id,
    part_name: formData.get("partName"),
    price: formData.get("partPrice"),
    description: formData.get("partDescription"),
    car: formData.get("carModel"),
    year: formData.get("carYear"),

    seller_location: {
      street: formData.get("street"),
      city: formData.get("city"),
      state: formData.get("state"),
      zipcode: formData.get("zipcode"),
    },
  };
  //console.log(partData);

  // Uploading images to cloudinary
  const imagesToUpload = [];

  for (const image of images) {
    const imageBuffer = await image.arrayBuffer();
    const imageArray = Array.from(new Uint8Array(imageBuffer));
    const imageData = Buffer.from(imageArray);

    const imageBase64 = imageData.toString("base64");

    const result = await cloudinary.uploader.upload(
      `data:image/png;base64,${imageBase64}`,
      {
        folder: "part-images",
      },
    );

    imagesToUpload.push(result.secure_url);
  }

  partData.images = imagesToUpload;

  const part = new Part(partData);
  await part.save();

  console.log("Part saved successfully");

  return { message: "Part saved successfully" };
};

export const deletePart = async (formData) => {

  
  const data = {
    partId: formData.get("partId"),
  };


  try {
    const sessionUser = await getSessionUser();


    // Check for session
    if (!sessionUser || !sessionUser.userId) {

      return { error: "User ID is required" };
    }

    const { userId } = sessionUser;
    await connectDb();
    console.log("Database connected");

    const part = await Part.findById(data.partId);
    console.log("Found part:", part);

    if (!part) {
      console.error("Part Not Found");
      return { error: "Part Not Found" };
    }

    // Verify ownership
    if (part.part_owner.toString() !== userId) {
      console.error("Unauthorized");
      return { error: "Unauthorized" };
    }

    // Extract public id's from image url in DB
    const publicIds = part.images.map((imageUrl) => {
      const parts = imageUrl.split("/");
      return parts.at(-1).split(".").at(0);
    });
    console.log("Public IDs to delete:", publicIds);

    // Delete images from Cloudinary
    if (publicIds.length > 0) {
      for (let publicId of publicIds) {
        await cloudinary.uploader.destroy("part-images/" + publicId);
      }
    }

    // Proceed with property deletion
    await part.deleteOne();
    console.log("Part Deleted");

    return { message: "Part Deleted" };
  } catch (error) {
    console.error("Error deleting part:", error);
    return { error: "Failed to delete part" };
  }
};
