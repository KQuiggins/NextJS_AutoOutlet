import connectDb from "@/config/db"
import Message from "@/models/Message"
import '@/models/Part'
import { convertToSerializableObject } from "@/utils/convertToSerializableObject"
import { getSessionUser } from "@/utils/getSessionUser"

const messagePage = async () => {
  connectDb();

  const sessionUser = await getSessionUser();

  const { userId } = sessionUser;

  const readMessages = await Message.find({ receiver: userId, read: true}).sort({ createdAt: -1 }).populate('part').populate('sender', 'username').populate('part', 'name').lean();

  const unreadMessages = await Message.find({ receiver: userId, read: false}).sort({ createdAt: -1 }).populate('part').populate('sender', 'username').populate('part', 'name').lean();

  const messages = [...readMessages, ...unreadMessages].map((messageDoc) => {
    const message = convertToSerializableObject(messageDoc);
    message.sender = convertToSerializableObject(message.sender);
    message.part = convertToSerializableObject(message.part);
    return message;
  });
  return (
    <section className='bg-blue-50'>
      <div className='container m-auto py-24 max-w-6xl'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <h1 className='text-3xl font-bold mb-4'>Your Messages</h1>

          <div className='space-y-4'>
            {messages.length === 0 ? (
              <p>You have no messages</p>
            ) : (
              messages.map((message) => (
                <div key={message._id} className='border-b pb-4'>
                  <h2 className='text-xl font-bold'>{message.part.name}</h2>
                  <p className='text-gray-500'>From: {message.sender.username}</p>
                  <p className='text-gray-500'>Email: {message.email}</p>
                  <p className='text-gray-500'>Phone: {message.phone}</p>
                  <p className='text-gray-500'>{message.body}</p>
                  <p className='text-gray-500'>Read: {message.read ? 'Yes' : 'No'}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default messagePage