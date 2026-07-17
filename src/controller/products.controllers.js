import { productService } from "../services/product.service.js";

export async function getAllProducts(req, res, next) {
    try {
        const products = await productService.getProducts();
        res.status(200).json({ status: "success", payload: products });
    } catch (error) {
        next(error);
    }
}

export async function getProductById(req, res, next) {
    try {
        const product = await productService.getProductById(req.params.pid);
        res.status(200).json({ status: "success", payload: product });
    } catch (error) {
        next(error);
    }
}

export async function createProduct(req, res, next) {
    try {
        const product = await productService.createProduct(req.body);
        res.status(201).json({ status: "success", payload: product });
    } catch (error) {
        next(error);
    }
}

export async function updateProduct(req, res, next) {
    try {
        const product = await productService.updateProduct(req.params.pid, req.body);
        res.status(200).json({ status: "success", payload: product });
    } catch (error) {
        next(error);
    }
}

export async function deleteProduct(req, res, next) {
    try {
        const product = await productService.deleteProduct(req.params.pid);
        res.status(200).json({ status: "success", payload: product });
    } catch (error) {
        next(error);
    }
}