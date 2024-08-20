import PartEditForm from "@/components/PartEditForm";
import connectDb from "@/config/db";
import Part from "@/models/Part";
import { convertToSerializableObject } from "@/utils/convertToSerializableObject";

const PartEditPage = async ({ params }) => {
  await connectDb();

  const partDoc = await Part.findById(params.id).lean();

  const part = convertToSerializableObject(partDoc);

  if (!part) {
    return (
      <h1 className='text-center text-2xl font-bold mt-10'>
        Part Not Found
      </h1>
    )


  }
  return (
    <section className='bg-blue-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <PartEditForm part={part}/>
        </div>
      </div>
    </section>
  )
}

export default PartEditPage