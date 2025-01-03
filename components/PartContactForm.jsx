
'use client'

import { useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useFormState, useFormStatus } from "react-dom"
import { addMessage } from "@/app/actions/addMessage"
import { useSession } from "next-auth/react"
import { toast } from "react-toastify"
import { FaPaperPlane } from "react-icons/fa"

function ContactForm() {

  const { data: session } = useSession()
  const params = useSearchParams()

  const partId = params.get("partId")
  const owner = params.get("owner")




  const { state, formAction } = useFormState(addMessage)

  if (state === "submitted") {
    return (
      <p className="text-center text-green-500">
        Your message has been sent successfully
      </p>
    )
  }

  useEffect(() => {
    if (state === "error") {
      toast.error("An error occurred. Please try again")
    }
    if (state === "success") {
      toast.success("Your message has been sent successfully")

    }
  }, [state])

  return (
    !session ? (
      <p className="text-center text-gray-500">
        Please sign in to contact the owner
      </p>

    ) : (

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-6">Contact Parts Owner</h3>
        <form action={formAction}>
          <input type="hidden" name="part" id="part" defaultValue={partId} />
          <input type="hidden" name="receiver" id="receiver" defaultValue={owner} />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
              Phone:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="text"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 h-44 focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline flex items-center justify-center"
              type="submit"
            >
              <FaPaperPlane className="mr-2" /> Send Message
            </button>
          </div>
        </form>
      </div>

    )
  )
}

export default ContactForm