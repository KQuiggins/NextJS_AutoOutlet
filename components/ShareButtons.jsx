import { FaShare } from "react-icons/fa"

const ShareButtons = () => {
  return (
    <button className="bg-black hover:bg-gray-800 text-white font-bold w-full py-2 px-4 rounded-full mb-4 flex items-center justify-center">
      <FaShare className="mr-2"/> Share Part
    </button>
  )
}

export default ShareButtons