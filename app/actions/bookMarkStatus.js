'use server'
import connectDb from "@/config/db";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

async function bookMarkStatus(parId) {
    await connectDb();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
        throw new Error('User ID is required');
    }

    const { userId } = sessionUser;

    const user = await User.findById(userId);

    let isPartBookmarked = user.bookmarks.includes(parId);

    return {isPartBookmarked};
}

export default bookMarkStatus;