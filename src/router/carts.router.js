import { Router } from "express";
import { createCart, addProductToCart, getProductsInCart } from "../controller/carts.controllers.js";

const router = Router();

router.post("/", createCart);
router.post("/:cid/product/:pid", addProductToCart);
router.get("/:cid", getProductsInCart)

export default router;