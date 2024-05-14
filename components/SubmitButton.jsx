'use client'
import { useFormStatus } from 'react-dom'
import { Toaster, toast } from 'sonner';


const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      <Toaster />
      <button
        className="bg-blue-500
        hover:bg-blue-600
        text-white
        font-bold
        py-2
        px-4
        rounded-full
        w-full
        focus:outline-none
        focus:shadow-outline"
        type="submit"
        aria-disabled={pending}
        onClick={ () => toast('Part added successfully!')}
      >
        {pending ? "Submitting..." : "Add Part"}
      </button>
    </>
  );
};

export default SubmitButton;
