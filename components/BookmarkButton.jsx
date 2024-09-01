'use client'
import { toast } from "react-toastify";
import { FaBookmark } from "react-icons/fa";
import { useSession } from "next-auth/react";
import bookMarkPart from "@/app/actions/bookMarkPart";

const BookmarkButton = ({ part }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const handleClick = async () => {
    if (!userId) {
      toast.error("You need to be signed in to bookmark a part");
      return;
    }

    bookMarkPart(part._id).then((res) => {
      if (res.error) {
        return toast.error(res.error);
      }
       return toast.success(res.message);

    })


  };
  return (
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center" onClick={handleClick}>
      <FaBookmark className="mr-2" />
      <span>Bookmark Part</span>
    </button>
  )
}

export default BookmarkButton