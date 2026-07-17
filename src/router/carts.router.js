import { Router } from "express";
import { createCart, addProductToCart } from "../controller/carts.controllers.js";

const router = Router();

router.post("/", createCart);
router.post("/:cid/product/:pid", addProductToCart);

export default router;