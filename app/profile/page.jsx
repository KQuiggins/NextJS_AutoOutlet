import Image from "next/image";
import Link from "next/link";
import connectDb from "@/config/db";
import { getSessionUser } from "@/utils/getSessionUser";
import profileDefault from "@/assets/images/profile.png";
import ProfileParts from "@/components/ProfileParts";
import Part from "@/models/Part";
import { convertToSerializableObject } from "@/utils/convertToSerializableObject";

const ProfilePage = async () => {
  await connectDb();

  const sessionUser = await getSessionUser();

  if (!sessionUser) {


    return <p>You must be logged in to view your profile.</p>;
  }

  const { userId } = sessionUser;

  const partDocs = await Part.find({ part_owner: userId }).lean();
  const parts = partDocs.map(convertToSerializableObject);
  

  return (
    <section className="bg-blue-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center md:justify-start">
              <Image
                className="rounded-full border border-gray-300 shadow-sm"
                src={sessionUser.user.image || profileDefault}
                alt="User"
                width={500}
                height={100}
                priority={true}
              />
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h2 className="text-2xl font-semibold mb-4">
                <span className="font-bold block">Name:</span> {sessionUser.user.name}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold block">Email:</span> {sessionUser.user.email}
              </h2>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-6">Listed Parts</h2>

            {parts.length === 0 ? (
              <p>You have no parts!</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProfileParts parts={parts} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
