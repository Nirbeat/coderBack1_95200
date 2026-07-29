import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    products: {
      type: [
        {
          product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
          quantity: { type: Number, min: 1 }
        }
      ],
      default: []
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
/*
  {
    _id: "lkrgjrjk1231412",
    products: [
      {
        _id: "kjfghm123142",
        product: "mgjghkk12312",
        quantity: 4
      }
    ]
  }
*/