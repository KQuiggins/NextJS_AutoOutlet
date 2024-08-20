'use server';

import connectDB from '@/config/db';
import Part from '@/models/Part';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';
import cloudinary from "@/config/cloudinary";
import { redirect } from 'next/navigation';

async function editPart(partId, formData) {

    await connectDB();

    const sessionUser = await getSessionUser();

    const { userId } = sessionUser;

    const existingPart = await Part.findById(partId);

    if (existingPart.part_owner.toString() !== userId) {
        throw new Error('Unauthorized');
    }

    const partData = {
        part_owner: userId,
        part_name: formData.get('partName'),
        price: formData.get('partPrice'),
        description: formData.get('partDescription'),
        car: formData.get('carModel'),
        year: formData.get('carYear'),

        seller_location: {
            street: formData.get('street'),
            city: formData.get('city'),
            state: formData.get('state'),
            zipcode: formData.get('zipcode'),
        },
    };

    const images = formData.getAll('images').filter((image) => image.name !== '');

    if (images.length > 0) {
        const imagesToUpload = [];

        for (const image of images) {
            const imageBuffer = await image.arrayBuffer();
            const imageArray = Array.from(new Uint8Array(imageBuffer));
            const imageData = Buffer.from(imageArray);
            const imageBase64 = imageData.toString("base64");

            const result = await cloudinary.uploader.upload(
                `data:image/png;base64,${imageBase64}`,
                { folder: "part-images" }
            );

            imagesToUpload.push(result.secure_url);
        }

        partData.images = imagesToUpload; // Update images with new Cloudinary URLs
    }


    const updatedPart = await Part.findByIdAndUpdate(partId, partData, {
        new: true,
        runValidators: true,
    });



    revalidatePath(`/`, "layout");

    redirect(`/parts/${updatedPart._id}`);

    return { message: 'Part updated' };
};

export default editPart;
