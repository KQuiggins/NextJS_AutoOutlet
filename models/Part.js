import { Schema, model, models } from "mongoose";

// Main Parts Schema
const PartsSchema = new Schema({
  part_owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  part_name: {
    type: String,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  car: {
    type: String,

  },
  year: {
    type: Number,
  },
  seller_name: {
    type: String,
  },

  imageUrl: {
    type: String,
  },
  seller_location: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipcode: {
      type: String,
    },
  },
});


const Part = models.Part || model("Part", PartsSchema);

module.exports = Part;
