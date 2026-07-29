import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 25
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      min: 0
    },
    stock: {
      type: Number,
      required: true,
      min: 0
    },
    thumbnails: { 
      type: [String],
      default: []
    },
    code: {
      type: String,
      required: true,
      uppercase: true
    },
    category: {
      type: String,
      required: true,
      enum: ["auriculares", "teclados", "monitores"]
    },
    status: { 
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

//INDICES
productSchema.index({ title: 1 }, { unique: true });
productSchema.index({ description: "text" });
productSchema.index({ code: 1 }, { unique: true });
productSchema.index({ price: 1 });
productSchema.index({ category: 1 });
productSchema.index({ category: 1, price: 1 });

productSchema.plugin(paginate);

const ProductModel = mongoose.model("Product", productSchema);

//HTTP request -> Route -> Controller -> Service -> Repository(Model)

export default ProductModel;