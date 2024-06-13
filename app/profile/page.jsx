'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import Spinner from "@/components/Spinner";
import { useSession } from "next-auth/react";
import profileDefault from '@/assets/images/profile.png';

const profilePage = () => {
  const { data: session, status } = useSession();
  const profileImage = session?.user?.image;
  const profileName = session?.user?.name;
  const profileEmail = session?.user?.email;

  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProperties = async (userId) => {
      if (!userId) return;

      try {
        const res = await fetch(`/api/parts/user/${userId}`);

        if (res.status === 200) {
          const data = await res.json();
          setParts(data);
        }
      } catch (error) {
        console.error("Failed to fetch user properties", error);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user.id) {
      fetchUserProperties(session.user.id);
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
                width={200}
                height={200}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <a href="/property.html">
                  <img
                    className="h-32 w-full rounded-md object-cover mb-4"
                    src="/images/properties/b1.jpg"
                    alt="Part 1"
                  />
                </a>
                <div className="mb-4">
                  <p className="text-lg font-semibold">Owned Part 1</p>
                  <p className="text-gray-600">Brake pads for Ford Mustang</p>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="/add-property.html"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Edit
                  </a>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <a href="/property.html">
                  <img
                    className="h-32 w-full rounded-md object-cover mb-4"
                    src="/images/properties/b2.jpg"
                    alt="Part 2"
                  />
                </a>
                <div className="mb-4">
                  <p className="text-lg font-semibold">Owned Part 2</p>
                  <p className="text-gray-600">Steering wheel for Honda Saturn</p>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="/add-property.html"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                  >
                    Edit
                  </a>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default profilePage;
