'use client'
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FaBookmark } from "react-icons/fa";
import bookMarkStatus from "@/app/actions/bookMarkStatus";
import { useSession } from "next-auth/react";
import bookMarkPart from "@/app/actions/bookMarkPart";

const BookmarkButton = ({ part }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;

  const [isBookmarked, setIsBookmarked] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }
    bookMarkStatus(part._id).then((res) => {
      if (res.error) return toast.error(res.error);
      if (res.isPartBookmarked) setIsBookmarked(res.isPartBookmarked);
      setLoading(false);
    });

  }, [part._id, userId, bookMarkStatus]);

  const handleClick = async () => {
    if (!userId) {
      toast.error("You need to be signed in to bookmark a part");
      return;
    }

    bookMarkPart(part._id).then((res) => {
      if (res.error) return toast.error(res.error);

      setIsBookmarked(res.isPartBookmarked);
       return toast.success(res.message);

    })


  };
  return isBookmarked ? (
    <button className="bg-red-500 hover:bg-red-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center" onClick={handleClick}>
      <FaBookmark className="mr-2" />
      <span>Remove Bookmark</span>
    </button>
  ) : (
    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center" onClick={handleClick}>
      <FaBookmark className="mr-2" />
      <span>Bookmark Part</span>
    </button>
  );
}

export default BookmarkButton