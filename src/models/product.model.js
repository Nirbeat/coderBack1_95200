import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    price: Number,
    stock: Number,
    thumbnails: { type: [String], default: [] },
    code: String,
    category: String,
    status: { type: Boolean, default: true }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const ProductModel = mongoose.model("Product", productSchema);

//HTTP request -> Route -> Controller -> Service -> Repository(Model)

export default ProductModel;