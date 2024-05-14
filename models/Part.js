import { Schema, model, models } from "mongoose";

// Main Parts Schema
const partsSchema = new Schema({
  part_owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  part_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  car: {
    type: String,
  },
  year: {
    type: Number,
  },

  images: [
    {
      type: String,
    },
  ],
  seller_location: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
  },
});

const Part = models.Part || model("Part", partsSchema);

export default Part;
