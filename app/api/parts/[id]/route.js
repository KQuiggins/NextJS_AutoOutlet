import { NextResponse } from "next/server";
import { getSessionUser } from "@/utils/getSessionUser";
import connectDb from "@/config/db";
import Part from "@/models/Part";

// GET /api/parts/:id
export const GET = async (request, { params }) => {

    await connectDb();

    const part = await Part.findById(params.id);

    if (!part) return new NextResponse("Part not found", { status: 404 });


    return NextResponse.json(part);

};

export const DELETE = async (_, { params }) => {

    await connectDb();

    const partId = params.id;

    const sessionUser = await getSessionUser();


    if (!sessionUser || !sessionUser.userId) {
      return new Response('User ID is required', { status: 401 });
    }

    const { userId } = sessionUser;


    const part = await Part.findById(partId);

    if (!part) return new Response('Part Not Found', { status: 404 });


    if (part.part_owner.toString() !== userId) {
      return new Response('Unauthorized', { status: 401 });
    }


    const publicIds = part.images.map((imageUrl) => {
      const parts = imageUrl.split('/');
      return parts.at(-1).split('.').at(0);
    });


    if (publicIds.length > 0) {
      for (let publicId of publicIds) {
        await cloudinary.uploader.destroy('part-images/' + publicId);
      }
    }

    
    await part.deleteOne();

    return new Response('Part Deleted', {
      status: 200,
    });

};
