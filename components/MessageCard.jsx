

const MessageCard = ({message}) => {
  return (
    <div className="relative bg-white p-4 rounded-md shadow-md border-gray-200">
        <h2 className="text-xl mb-4">
            <span className="font-bold">Part Name:</span>{' '}
            {message.part.part_name}
        </h2>
    </div>
  )
}

export default MessageCard