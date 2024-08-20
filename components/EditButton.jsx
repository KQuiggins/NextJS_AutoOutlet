'use client';
import  editPart from "@/app/actions/editPart";
import { toast } from 'react-toastify';

const EditButton = ({partId}) => {

    const handleEdit = async (formData) => {


        const partId = formData.get('partId');
        const response = await editPart(partId, formData);
        console.log(response);
        if (response.error) {
            toast.error(response.error);
        } else {
            toast.success("Part updated successfully");
        }
    }
    return (
        <form action={handleEdit} method="post">
            <input type="hidden" name="partId" value={partId} />
            <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                type="submit"
            >
                Edit
            </button>
        </form>
    )
}

export default EditButton