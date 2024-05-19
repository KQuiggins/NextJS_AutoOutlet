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
  console.log(partData);

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
