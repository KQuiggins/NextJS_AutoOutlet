import { NextResponse } from "next/server";
import { getSessionUser } from "@/utils/getSessionUser";
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

export const DELETE = async (_, { params }) => {
  try {
    const partId = params.id;

    const sessionUser = await getSessionUser();

    // Check for session
    if (!sessionUser || !sessionUser.userId) {
      return new Response('User ID is required', { status: 401 });
    }

    const { userId } = sessionUser;

    await connectDb();

    const part = await Part.findById(partId);

    if (!part) return new Response('Part Not Found', { status: 404 });

    // Verify ownership
    if (part.part_owner.toString() !== userId) {
      return new Response('Unauthorized', { status: 401 });
    }

    // extract public id's from image url in DB
    const publicIds = part.images.map((imageUrl) => {
      const parts = imageUrl.split('/');
      return parts.at(-1).split('.').at(0);
    });

    // Delete images from Cloudinary
    if (publicIds.length > 0) {
      for (let publicId of publicIds) {
        await cloudinary.uploader.destroy('part-images/' + publicId);
      }
    }

    // Proceed with property deletion
    await part.deleteOne();

    return new Response('Part Deleted', {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response('Something Went Wrong', { status: 500 });
  }
};
