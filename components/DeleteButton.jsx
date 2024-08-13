'use client';
import { deletePart } from "@/app/actions/deletePart";
import { toast } from 'react-toastify';

const DeleteButton = ({partId}) => {

    const handleDelete = async (formData) => {



        const response = await deletePart(formData);
        console.log(response);
        if (response.error) {
            toast.error(response.error);
        } else {
            toast.success("Part deleted successfully");
        }
    }
    return (
        <form action={handleDelete} method="post">
            <input type="hidden" name="partId" value={partId} />
            <button
                className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                type="submit"
            >
                Delete
            </button>
        </form>
    )
}

export default DeleteButton