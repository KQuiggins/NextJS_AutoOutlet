
import Link from 'next/link';
import { FaArrowAltCircleLeft } from 'react-icons/fa';
import ImageCard from '@/components/PartsCard';
import PartSearchForm from '@/components/PartSearchForm';
import connectDB from '@/config/db';
import Part from '@/models/Part';
import { convertToSerializableObject } from '@/utils/convertToSerializableObject';


const SearchResultsPage = async ({
  searchParams
}) => {
  const { partType } = searchParams || {};

  await connectDB();

  let query = {};


  // Only check for property if its not 'All'
  if (partType && partType !== 'All') {
    const typePattern = new RegExp(partType, 'i');
    query.type = typePattern;
  }

  const partsQueryResults = await Part.find(query).lean();
  const parts = partsQueryResults.map(convertToSerializableObject);

  return (
    <>
      <section className='bg-blue-700 py-4'>
        <div className='max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8'>
          <PartSearchForm />
        </div>
      </section>
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          <Link
            href='/parts'
            className='flex items-center text-blue-500 hover:underline mb-3'
          >
            <FaArrowAltCircleLeft className='mr-2 mb-1' /> Back To Parts
          </Link>
          <h1 className='text-2xl mb-4'>Search Results</h1>
          {parts.length === 0 ? (
            <p>No search results found</p>
          ) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {parts.map((part) => (
                <ImageCard key={part._id} imageUrl={part.images[0]}>{part.part_name}</ImageCard>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default SearchResultsPage;