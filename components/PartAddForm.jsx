const PartAddForm = () => {
  return (
    <form>
      <h2 className="text-3xl text-center font-semibold mb-6">Add Part Form</h2>
      <div className="mb-4">
        <label
          htmlFor="seller_name"
          className="block text-gray-700 font-bold mb-2"
        >
          Seller Name
        </label>
        <input
          type="text"
          id="seller_name"
          name="seller_info.name"
          className="border rounded w-full py-2 px-3"
          placeholder="Name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          What part are you selling?
        </label>
        <input
          type="text"
          id="name"
          name="part_info.name"
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
          name="part_info.description"
          className="border rounded w-full py-2 px-3"
          rows="4"
          placeholder="Add a description of your part"
        ></textarea>
      </div>
      <div className="mb-4">
        <label
          htmlFor="part_price"
          className="block text-gray-700 font-bold mb-2"
        >
          Part Price
        </label>
        <input
          type="text"
          id="part_price"
          name="part_info.price"
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
          type="submit"
        >
          Add Property
        </button>
      </div>
    </form>
  );
};

export default PartAddForm;
