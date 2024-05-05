import { formAction } from "@/app/actions/actions";




const PartAddForm = async () => {

  return (
    <form action={formAction}>
      <h2 className="text-3xl text-center font-semibold mb-6">Add Part Form</h2>
      

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
        />
      </div>

      <div className="mb-4 bg-blue-50 p-4">
        <label className="block text-gray-700 font-bold mb-2">
          Sellers Location
        </label>
        <input
          type="text"
          id="street"
          name="location.street"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="Street"
        />
        <input
          type="text"
          id="city"
          name="location.city"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="City"
          required
        />
        <input
          type="text"
          id="state"
          name="location.state"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="State"
          required
        />
        <input
          type="text"
          id="zipcode"
          name="location.zipcode"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="Zipcode"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="images" className="block text-gray-700 font-bold mb-2">
          Image
        </label>
        <input
          type="file"
          id="images"
          name="images"
          className="border rounded w-full py-2 px-3"
          accept="image/*"
          multiple
        />
      </div>

      <div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"

        >
          Add Property
        </button>
      </div>
    </form>
  );
};

export default PartAddForm;
