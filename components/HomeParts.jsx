import parts from "@/parts.json";
import ImageCard from "@/components/PartsCard";
import { FaCar, FaMoneyBillWave, FaUser } from "react-icons/fa";

const HomeParts = () => {
  const randomThreeProperties = parts
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Recent Parts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {randomThreeProperties.length === 0 ? (
            <div className="text-center p-4 bg-gray-100 rounded-lg">
              <h2 className="text-xl font-semibold">No parts available</h2>
              <p>
                There are no parts available at the moment. Please check back
                later.
              </p>
            </div>
          ) : (
            randomThreeProperties.map((part) => (
              <div key={part._id}>
                <ImageCard imageUrl={part.imageUrl}>
                  <h2 className="text-lg font-bold">{part.part_name}</h2>
                  <p>{part.description}</p>
                  <div className="flex items-center gap-2">
                    <FaMoneyBillWave />
                    <span>${part.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCar />
                    <span>
                      {part.car} {part.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaUser />
                    <span>{part.seller_name}</span>
                  </div>
                </ImageCard>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeParts;