import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    offer: { type: Number, default: 0 },
    stock: { type: Number, default: "1" },
  },
  {
    minimize: false,
  }
);

const Product = mongoose.model("product", productSchema);

export default Product;
