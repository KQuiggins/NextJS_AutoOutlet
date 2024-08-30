import { FaBookmark } from "react-icons/fa";

const BookmarkButton = ({ property }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
      <FaBookmark className="mr-2" />
      <span>Bookmark Part</span>
    </button>
  )
}

export default BookmarkButton