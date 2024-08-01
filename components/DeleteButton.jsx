import { deletePart } from "@/app/actions/formAction"

const DeleteButton = ({partId}) => {
    return (
        <form action={deletePart} method="post">
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