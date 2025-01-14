'use client'
import { useState } from 'react'
import markMessage from '@/app/actions/markMessage'
import { toast } from 'react-toastify'

const MessageCard = ({ message }) => {
    const [isRead, setIsRead] = useState(message.read)

    const handleIsRead = async () => {
        try {
            const read = await markMessage(message._id)
            setIsRead(read)
            toast.success(`Message marked as ${read ? 'read' : 'unread'}`)
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className="relative bg-white p-4 rounded-md shadow-md border-gray-200">
            {!isRead && (
                <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 rounded-md">
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
                <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
                    Delete
                </button>
            </ul>
        </div>
    )
}

export default MessageCard