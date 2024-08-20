'use client'
import { useState } from 'react';
import DeleteButton from "@/components/DeleteButton";
import EditButton from "@/components/EditButton";
import Image from 'next/image';
import Link from 'next/link';


function ProfileParts({ parts: initialParts }) {
    const [parts, setParts] = useState(initialParts);



    return parts.map((part) => {
        if (!part || !part._id) {
            console.error("Invalid part object:", part);
            return null;
        }

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
                        href={`/parts/${part._id}/edit_part`}
                        className='bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600'
                    >
                        Edit
                    </Link>
                    {/* <EditButton partId={part?._id.toString()} /> */}
                    <DeleteButton partId={part?._id.toString()} />
                </div>
            </div>
        );
    });
}

export default ProfileParts;