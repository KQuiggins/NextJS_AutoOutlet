import ImageCard from "@/components/PartsCard"
import PartImages from "@/components/PartImages"
import connectDb from "@/config/db"
import User from "@/models/User"
import { FaCar, FaMoneyBillWave, FaUser } from "react-icons/fa"
import { getSessionUser } from "@/utils/getSessionUser"

const SavedParts = async () => {
    await connectDb()


    const sessionUser = await getSessionUser({ cache: 'no-store' });

    if (!sessionUser) {
      
      return <p>You must be logged in to view saved parts.</p>;
    }

    const { userId } = sessionUser;

    const { bookmarks } = await User.findById(userId).populate("bookmarks").lean().cache('no-store');

    return (
        <section>
            <div className="container lg:container m-auto py-4 px-6">
                <h1 className="text-2xl font-bold text-center mb-6">Saved Parts</h1>
                {bookmarks.length === 0 ? (
                    <p>No saved parts</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {bookmarks.map((part) => (
                            <ImageCard imageUrl={part.images[0]}>
                                <h2 className="text-lg font-bold">{part.part_name}</h2>
                                <p>{part.description}</p>
                                <div className="flex items-center gap-2">
                                    <FaMoneyBillWave /><span>${part.price}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaCar /><span>{part.car} {part.year}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaUser /><span>{part.seller_name}</span>
                                </div>
                            </ImageCard>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default SavedParts
