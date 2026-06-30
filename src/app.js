import express from "express";
import { env } from "./config/env.js";
import ProductManager from "./managers/ProductManager.js";
const app = express();

app.listen(env.PORT, () => {
    console.log("server levantado en " + env.PORT);
});

app.get("/api/products", async (req, res, next) => {
    try {
        const products = await ProductManager.getProducts();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
});

app.post("/api/products", async (req, res, next) => {
    try {
        const product = await ProductManager.createProduct(req.body);
        res.status(201).json({ message: "producto creado", product });
    } catch (error) {
        next(error);
    }
});

app.put("/api/products/:pid", async (req, res, next) => {
    try {
        const { pid } = req.params;
        const updatedProduct = await ProductManager.updateProductById(pid, req.body);
        res.status(200).json({ message: "producto actualizado", updatedProduct });
    } catch (error) {
        next(error);
    }
});

app.delete("/api/products/:pid", async (req, res, next) => {
    try {
        const { pid } = req.params;
        const deletedProduct = await ProductManager.deleteProductById(pid);
        res.status(200).json({ message: "producto actualizado", deletedProduct });
    } catch (error) {
        next(error);
    }
});