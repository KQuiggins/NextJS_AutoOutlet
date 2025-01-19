'use client'
import { useState } from 'react'
import markMessage from '@/app/actions/markMessage'
import { deleteMessage } from '@/app/actions/deleteMessages'
import { toast } from 'react-toastify'
import { useGlobalContext } from '@/app/context/GlobalContext'

const MessageCard = ({ message }) => {
    const [isRead, setIsRead] = useState(message.read);
    const [isDeleted, setIsDeleted] = useState(false);
    const { setUnreadCount } = useGlobalContext();

    const handleIsRead = async () => {
        try {
            const read = await markMessage(message._id)
            setIsRead(read)
            setUnreadCount((prev) => (read ? prev - 1 : prev + 1))
            toast.success(`Message marked as ${read ? 'read' : 'unread'}`)
        } catch (error) {
            toast.error(error.message)
        }
    }


    const handleDelete = async () => {
        try {
            await deleteMessage(message._id)
            setIsDeleted(true)
            setUnreadCount((prev) => (isRead ? prev  : prev - 1))
            toast.success('Message deleted')
        } catch (error) {
            toast.error(error.message)
        }
    }

    if (isDeleted) {
        return <p>Message has been deleted</p>
    }

    return (
        <div className="relative bg-white p-4 rounded-md shadow-md border-gray-200">
            {!isRead && (
                <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
                    New
                </span>
            )}
            <h2 className="text-xl mb-4">
                <span className="font-bold">Part Name:</span>{' '}
                {message.part.part_name}
            </h2>
            <p className="text-gray-700">{message.body}</p>

            <ul>
                <li>
                    <strong>Reply Email:</strong>{' '}
                    <a href={`mailto:${message.email}`} className="text-blue-500">
                        {message.email}
                    </a>
                </li>
                <li>
                    <strong>Reply Phone:</strong>{' '}
                    <a href={`tel:${message.phone}`} className="text-blue-500">
                        {message.phone}
                    </a>
                </li>
                <li>
                    <strong>Date Received:</strong>{' '}
                    {new Date(message.createdAt).toLocaleDateString()}
                </li>
                <button onClick={handleIsRead} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-3">
                    {isRead ? 'Mark as Unread' : 'Mark as Read'}
                </button>
                <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
                    Delete
                </button>
            </ul>
        </div>
    )
}

export default MessageCard