import React from "react";
import { FaCar, FaMoneyBillWave, FaUser} from 'react-icons/fa';
import Link from "next/link";
import ImageCard from "@/components/PartsCard";

async function fetchParts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_DOMAIN}/parts`);

    if (!res.ok) {
      throw new Error('An error occurred while fetching the data');
    }

    return res.json();

  } catch (error) {
    console.error(error);

  }
}

const PartsPage = async () => {
  const parts = await fetchParts();

  return (
    <section>
      <div className="container-xl lg:container m-auto">
        {parts.length === 0 ? (
          <div className="text-center p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold">No parts available</h2>
            <p>
              There are no parts available at the moment. Please check back
              later.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {parts.map((part, index) => (
              <Link key={part._id} href={`/parts/${part._id}`} passHref>
  <div>
    <ImageCard imageUrl={part.imageUrl}>
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
  </div>
</Link>

            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PartsPage;
