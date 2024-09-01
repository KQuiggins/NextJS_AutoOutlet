'use server'

import connectDb from "@/config/db";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function bookMarkPart(parId) {
    await connectDb();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
        throw new Error('User ID is required');
    }

    const { userId } = sessionUser;

    const user = await User.findById(userId);

    let isPartBookmarked = user.bookmarks.includes(parId);

    let message;

    if (isPartBookmarked) {

        user.bookmarks.pull(parId);
        message = 'Part removed from bookmarks';
        isPartBookmarked = false;

    } else {

        user.bookmarks.push(parId);
        message = 'Part added to bookmarks';
        isPartBookmarked = true;
    }

    await user.save();
    revalidatePath('/parts/saved', 'page');

    return { message, isPartBookmarked };

};

export default bookMarkPart;