'use server'
import connectDb from "@/config/db";
import Message from "@/models/Message";
import { getSessionUser } from "@/utils/getSessionUser";
import { revalidatePath } from "next/cache";

async function markMessage(messageId) {
    await connectDb();

    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.userId) {
        throw new Error('User ID is required');
    }

    const { userId } = sessionUser;

    const message = await Message.findById(messageId);

    if (!message) {
        throw new Error('Message not found');
    }

    if (message.receiver.toString() !== userId) {
        throw new Error('Unauthorized');
    }

    message.read = !message.read;

    revalidatePath('/messages', 'page');

    await message.save();

    return message.read;



};

export default markMessage;