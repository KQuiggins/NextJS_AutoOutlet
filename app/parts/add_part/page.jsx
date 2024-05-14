

import { formSubmit } from "@/app/actions/formAction";
import { useSession } from "next-auth/react";


import PartAddForm from "@/components/PartAddForm";

const initialState = {
  message: null,
};

const AddPartsPage = () => {
  //const { user: session } = useSession();
  //const [state, formAction] = useFormState(formSubmit, initialState);

  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <PartAddForm />
        </div>
      </div>
    </section>
  );
};

export default AddPartsPage;
