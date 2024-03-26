import React from 'react';
import parts from "@/parts.json"; // Assuming parts is an array of objects
import ImageCard from "@/components/PartsCard"; // Correct import path assumed

const PartsPage = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        {parts.length === 0 ? (
          <div className="text-center p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold">No parts available</h2>
            <p>
              There are no parts available at the moment. Please check back later.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {parts.map((part, index) => (
              <ImageCard key={index} imageUrl={part.imageUrl}>
                <h2 className="text-lg font-bold">{part.part_name}</h2>
                <p>{part.description}</p>
                <p>Price: ${part.price}</p>
                <p>Car: {part.car} {part.year}</p>
                <p>Seller: {part.seller_name}</p>
                
              </ImageCard>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PartsPage;
