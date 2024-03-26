'use client';
import Button from '@/components/Button';
import Select from '@/components/Select';

const HeroPage = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];
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
           <Select items={items} />
          </div>
          <Button>Search</Button>
        </form>
      </div>
    </section>
  );
};

export default HeroPage;
