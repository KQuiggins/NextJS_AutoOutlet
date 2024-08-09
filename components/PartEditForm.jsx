import React from 'react'

const PartEditForm = () => {
  return (
    <form
      ref={ref}
      action={ formData => {
        formAction(formData)
        ref.current?.reset()
        }}

    >
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
          required
        />
        <input
          type="text"
          id="city"
          name="city"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="City"
          required
        />
        <input
          type="text"
          id="state"
          name="state"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="State"
          required
        />
        <input
          type="text"
          id="zipcode"
          name="zipcode"
          className="border rounded w-full py-2 px-3 mb-2"
          placeholder="Zipcode"
          required
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
        <SubmitButton />
      </div>
    </form>
  )
}

export default PartEditForm