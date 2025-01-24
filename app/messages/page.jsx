import connectDb from "@/config/db"
import Message from "@/models/Message"
import MessageCard from "@/components/MessageCard"
import '@/models/Part'
import { convertToSerializableObject } from "@/utils/convertToSerializableObject"
import { getSessionUser } from "@/utils/getSessionUser"

const messagePage = async () => {
  connectDb();

  const sessionUser = await getSessionUser({ cache: 'no-store' });

  if (!sessionUser) {
    
    return <p>You must be logged in to view messages.</p>;
  }

  const { userId } = sessionUser;

  const readMessages = await Message.find({ receiver: userId, read: true}).sort({ createdAt: -1 }).populate('part').populate('sender', 'username').populate('part', 'part_name').lean().cache('no-store');

  const unreadMessages = await Message.find({ receiver: userId, read: false}).sort({ createdAt: -1 }).populate('part').populate('sender', 'username').populate('part', 'part_name').lean().cache('no-store');

  const messages = [ ...unreadMessages, ...readMessages].map((messageDoc) => {
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
                <MessageCard key={message._id} message={message} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default messagePage
