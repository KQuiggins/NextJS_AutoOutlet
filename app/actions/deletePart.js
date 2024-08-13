"use server";
import connectDb from "@/config/db";
import { getSessionUser } from "@/utils/getSessionUser";
import Part from "@/models/Part";
import cloudinary from "@/config/cloudinary";
import { revalidatePath } from "next/cache";



export const deletePart = async (formData) => {

    try {
      const partId = await formData.get("partId");
      const sessionUser = await getSessionUser();


      // Check for session
      if (!sessionUser || !sessionUser.userId) {

        return { error: "User ID is required" };
      }

      const { userId } = sessionUser;
      await connectDb();
      console.log("Database connected");

      const part = await Part.findById(partId);
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
      revalidatePath('/');

      return { message: "Part Deleted" };
    } catch (error) {
      console.error("Error deleting part:", error);
      return { error: "Failed to delete part" };
    }

  };