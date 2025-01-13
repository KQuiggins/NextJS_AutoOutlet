

const MessageCard = ({ message }) => {
    return (
        <div className="relative bg-white p-4 rounded-md shadow-md border-gray-200">
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
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 mr-3">
                    Mark as Read
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md mt-4">
                    Delete
                </button>
            </ul>
        </div>
    )
}

export default MessageCard