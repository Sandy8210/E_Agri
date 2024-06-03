import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product_image: { type: String, required: true },
  product_name: { type: String, required: true },
  company_name: { type: String, required: true },
  product_desc: { type: String, required: true },
  product_category: { type: String, required: true },
  product_price: { type: Number, required: true },
  product_offer: { type: Number, default: 0 },
});

const ProductModel =
  mongoose.models.product || mongoose.model("product", productSchema);

export default ProductModel;
