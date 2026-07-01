import { Router } from "express";
import { getAllProducts, createProduct, updateProduct, deleteProduct } from "../controller/products.controllers.js";
const router = Router();

router.get("/", getAllProducts);
router.post("/", createProduct);
router.put("/:pid", updateProduct);
router.delete("/:pid", deleteProduct);

export default router;