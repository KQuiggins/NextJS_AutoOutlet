import { FaPaperPlane } from "react-icons/fa"
import { useFormStatus } from "react-dom"

const ContactFormBtn = () => {
    const { pending } = useFormStatus()
    return (
        <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
            type="submit"
            disabled={pending}
        >
            <FaPaperPlane className="mr-2" /> {pending ? "Sending..." : "Send Message"}
        </button>
    )
}

export default ContactFormBtn