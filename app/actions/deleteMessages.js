"use server";
import connectDb from "@/config/db";
import { getSessionUser } from "@/utils/getSessionUser";
import Message from "@/models/Message";

import { revalidatePath } from "next/cache";



export const deleteMessage = async (messageId) => {

    await connectDb();


    const sessionUser = await getSessionUser();


    // Check for session
    if (!sessionUser || !sessionUser.userId) {

        return { error: "User ID is required" };
    }

    const { userId } = sessionUser;
    const message = await Message.findById(messageId);

    if (!message) throw new Error('Message Not Found');

    // Verify ownership
    if (message.receiver.toString() !== userId) {
        throw new Error('Unauthorized');
    }

    // revalidate cache
    revalidatePath('/messages', 'page');
    await message.deleteOne();





    revalidatePath("/messages", "page");


};