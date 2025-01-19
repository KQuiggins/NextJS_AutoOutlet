'use server'
import connectDb from "@/config/db";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";


async function geUnreadMessageCount(messageId) {
    await connectDb();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
        throw new Error('User ID is required');
    }

    const { userId } = sessionUser;

   const count = await Message.countDocuments({ receiver: userId, read: false });

   return { count };


};

export default geUnreadMessageCount;