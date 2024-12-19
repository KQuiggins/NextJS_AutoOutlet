"use server";
import connectDb from "@/config/db";
import { getSessionUser } from "@/utils/getSessionUser";
import Message from "@/models/Message";



export const addMessage = async (formData) => {
  await connectDb();

  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error("User ID is required");

  }

  const { userId } = sessionUser;

  const receiver = formData.get('receiver');

  if (userId === receiver) {
    return {error: "You cannot send a message to yourself"};
  }

  const message = new Message({
    sender: userId,
    receiver,
    part: formData.get('part'),
    message: formData.get('message'),
    email: formData.get('email'),
    phone: formData.get('phone'),
  });

  await message.save();

  return {submitted: true}




};
