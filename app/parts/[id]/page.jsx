"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchPartById } from "@/utils/request";
import PartHeaderImage from "@/components/PartHeaderImage";
import Spinner from "@/components/Spinner";

const PartPage = () => {
  const { id } = useParams();

  const [part, setPart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPart = async () => {
      if (!id) return;
      try {
        const part = await fetchPartById(id);
        setPart(part);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching part", error);
      } finally {
        setLoading(false);
      }
    };

    if (part === null) {
      fetchPart();
    }
  }, [id, part]);

  if (!part && !loading) {
    return (
      <div>
        <h1 className="text=center text-2xl font-bold mt-10">Part not found</h1>
      </div>
    );
  }

  return (
    <>
    {loading && <Spinner loading={loading}/>}
      {!loading && part && (
        <>
          <PartHeaderImage image={part.images[0]} />
          <section>
            <div className="container m-auto py-6 px-6">
              <Link
                href="/parts"
                className="text-blue-500 hover:text-blue-600 flex items-center"
              >
                <i className="fas fa-arrow-left mr-2"></i> Back to all parts
              </Link>
            </div>
          </section>
          <section className="bg-blue-50">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <div>
                  <h1 className="text-3xl font-bold text-blue-500 my-6">
                    {part.part_name}
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h2 className="text-xl font-bold">Description</h2>
                      <p>{part.description}</p>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Price</h2>
                      <p>${part.price}</p>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Car</h2>
                      <p>
                        {part.car} {part.year}
                      </p>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">Seller</h2>
                      <p>{part.seller_name}</p>
                    </div>
                  </div>
                </div>
                <aside className="space-y-4">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
                    <i className="fas fa-bookmark mr-2"></i> Bookmark Part
                  </button>
                  <button className="bg-black hover:bg-gray-800 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
                    <i className="fas fa-share mr-2"></i> Share Part
                  </button>
                  <Link href='/contact'>
                    <button className="bg-black hover:bg-gray-800 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center">
                      <i className="fas fa-share mr-2"></i> Contact Seller
                    </button>
                  </Link>
                </aside>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default PartPage;
