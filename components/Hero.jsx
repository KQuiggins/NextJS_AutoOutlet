import React from "react";

const HeroPage = () => {
  return (
    <section className="bg-blue-700 py-20 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Find The Perfect Car Part
          </h1>
          <p className="my-4 text-xl text-white">
            Discover high-quality parts for your vehicle.
          </p>
        </div>
        <form className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center">
          <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
            <label htmlFor="search-parts" className="sr-only">
              Search Parts
            </label>
            <input
              type="text"
              id="search-parts"
              placeholder="Search (e.g., brake pads, oil filter)"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="w-full md:w-2/5 md:pl-2">
            <label htmlFor="part-type" className="sr-only">
              Part Type
            </label>
            <select
              id="part-type"
              className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="All">All Categories</option>
              <option value="Engine Parts">Engine Parts</option>
              <option value="Brakes">Brakes</option>
              <option value="Suspension">Suspension</option>
              <option value="Transmission">Transmission</option>
              <option value="Electrical">Electrical Components</option>
              <option value="Body Parts">Body Parts</option>
              <option value="Wheels & Tires">Wheels & Tires</option>
              <option value="Interior Accessories">Interior Accessories</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto lg:min-w-[200px] px-4 py-3 rounded-lg bg-gray-700 text-white hover:bg-white focus:outline-none focus:ring focus:ring-white text-sm sm:text-base md:text-lg lg:px-6 lg:py-4 lg:text-xl whitespace-nowrap"
          >
            Search Parts
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroPage;
