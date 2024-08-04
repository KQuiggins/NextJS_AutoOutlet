"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Spinner from "@/components/Spinner";
import { useSession } from "next-auth/react";
import profileDefault from "@/assets/images/profile.png";
import DeleteButton from "@/components/DeleteButton";


const ProfilePage = () => {
  const { data: session, status } = useSession();
  console.log("Session:", session);
  const profileImage = session?.user?.image;
  const profileName = session?.user?.name;
  const profileEmail = session?.user?.email;

  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserParts = async (userId) => {
      if (!userId) return;

      try {
        const res = await fetch(`/api/parts/user/${userId}`);

        if (res.status === 200) {
          const data = await res.json();

          setParts(data);
        } else {
          console.error("Failed to fetch parts:", res.statusText);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user?.id) {
      fetchUserParts(session.user.id);
    }
  }, [session]);



  return (
    <section className="bg-blue-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white p-8 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center md:justify-start">
              <Image
                className="rounded-full border border-gray-300 shadow-sm"
                src={profileImage || profileDefault}
                alt="User"
                width={500}
                height={100}
                priority={true}
              />
            </div>
            <div className="md:w-3/4 md:pl-8">
              <h2 className="text-2xl font-semibold mb-4">
                <span className="font-bold block">Name:</span> {profileName}
              </h2>
              <h2 className="text-2xl">
                <span className="font-bold block">Email:</span> {profileEmail}
              </h2>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-6">Listed Parts</h2>

            {loading ? (
              <Spinner loading={loading} />
            ) : (
              <>
                {parts.length === 0 ? (
                  <p>You have no parts!</p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {parts.map((part) => {
                      console.log("Rendering part:", part);
                      return (
                        <div
                          key={part._id}
                          className="mb-10 bg-gray-50 p-6 rounded-lg shadow-sm"
                        >
                          <Link href={`/parts/${part._id}`}>
                            <Image
                              className="h-32 w-full rounded-md object-cover"
                              src={part.images[0]}
                              alt={part.part_name}
                              width={500}
                              height={100}
                              priority={true}
                            />
                          </Link>
                          <div className="mt-2">
                            <p className="text-lg font-semibold">
                              {part.part_name}
                            </p>
                            <p className="text-gray-600">{part.description}</p>
                          </div>
                          <div className="mt-2 flex space-x-2">
                            <Link
                              href={`/parts/${part._id}/edit`}
                              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                              Edit
                            </Link>
                            <DeleteButton partId={part?._id.toString()} />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
