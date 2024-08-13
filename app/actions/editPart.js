'use server';

import connectDB from '@/config/db';
import Part from '@/models/Part';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';
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
        images: formData.getAll('images').filter((image) => image.name !== ''),
        seller_location: {
            street: formData.get('street'),
            city: formData.get('city'),
            state: formData.get('state'),
            zipcode: formData.get('zipcode'),
        },
    };

    const updatedPart = await Part.findByIdAndUpdate(partId, partData, {
        new: true,
        runValidators: true,
    });

    

    revalidatePath(`/`, layout);

    redirect(`/parts/${updatedPart._id}`);

    return { message: 'Part updated' };
};

export default editPart;
