import SubmitButton from "./SubmitButton"
import editPart from "@/app/actions/editPart"

const PartEditForm = ({ part }) => {

  const partId = editPart.bind(null, part._id)

  return (
    <form

      action={editPart}
    >
      <h2 className="text-3xl text-center font-semibold mb-6">Edit Part Form</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          What part are you selling?
        </label>
        <input
          type="text"
          id="name"
          name="partName"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="eg. Brakes, Tires, Transmission"
          defaultValue={part.part_name}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Describe your part
        </label>
        <textarea
          id="description"
          name="partDescription"
          className="border rounded w-full py-2 px-3"
          rows="4"
          placeholder="Add a description of your part"
          defaultValue={part.description}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="carModel"
          className="block text-gray-700 font-bold mb-2"
        >
          Car Model
        </label>
        <input
          type="text"
          id="carModel"
          name="carModel"
          className="border rounded w-full py-2 px-3"
          placeholder="Enter the car model"
          defaultValue={part.car}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="year" className="block text-gray-700 font-bold mb-2">
          Car Year
        </label>
        <input
          type="text"
          id="year"
          name="carYear"
          className="border rounded w-full py-2 px-3"
          placeholder="Enter the year of the car"
          defaultValue={part.year}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="part_price"
          className="block text-gray-700 font-bold mb-2"
        >
          Part Price
        </label>
        <input
          type="number"
          id="part_price"
          name="partPrice"
          className="border rounded w-full py-2 px-3"
          placeholder="Price"
          defaultValue={part.price}
          required
        />
      </div>

      <div className="mb-4 bg-blue-50 p-4">
        <label className="block text-gray-700 font-bold mb-2">
          Sellers Location
        </label>
        <input
          type="text"
          id="street"
          name="street"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="Street"
          defaultValue={part.seller_location.street}
          required
        />
        <input
          type="text"
          id="city"
          name="city"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="City"
          defaultValue={part.seller_location.city}
          required
        />
        <input
          type="text"
          id="state"
          name="state"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="State"
          defaultValue={part.seller_location.state}
          required
        />
        <input
          type="text"
          id="zipcode"
          name="zipcode"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="Zipcode"
          defaultValue={part.seller_location.zipcode}
          required
        />
      </div>



      <div>
        <SubmitButton />
      </div>
    </form>
  )
}

export default PartEditForm