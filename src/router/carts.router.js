import { Router } from "express";
import { createCart, addProductToCart } from "../controller/carts.controllers.js";
import { validateParams } from "../middleware/carts.middlewares.js";

const router = Router();

router.post("/", createCart);
router.post("/:cid/product/:pid", validateParams, addProductToCart);

export default router;