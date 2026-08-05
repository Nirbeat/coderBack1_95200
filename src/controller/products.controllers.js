import { productService } from "../services/product.service.js";
import { productsQuerySchema, mongoIdSchema, productBodySchema } from "../schemas/product.schema.js";

export async function getAllProducts(req, res, next) {
    try {
        const result = productsQuerySchema.safeParse(req.query);

        if (!result.success) {
            const error = new Error("Datos de consulta invalidos");
            error.statusCode = 400;
            throw error;
        }

        const { category, maxPrice, limit, page, sortBy, order } = result.data;
        const products = await productService.getProducts(category, maxPrice, limit, page, sortBy, order);
        res.status(200).json({ status: "success", payload: products });
    } catch (error) {
        next(error);
    }
}

export async function getProductById(req, res, next) {
    try {
        const result = mongoIdSchema.safeParse(req.params);
        if(!result.success){
            const error = new Error("El ID del producto no es valido");
            error.statusCode = 400;
            throw error;
        }

        const product = await productService.getProductById(result.data.pid);
        res.status(200).json({ status: "success", payload: product });
    } catch (error) {
        next(error);
    }
}

export async function createProduct(req, res, next) {
    try {
        const result = productBodySchema.safeParse(req.body);
        if(!result.success){
            const error = new Error("Datos de producto invalido");
            error.statusCode = 400;
            throw error;
        }

        const product = await productService.createProduct(result.data);
        res.status(201).json({ status: "success", payload: product });
    } catch (error) {
        next(error);
    }
}

export async function updateProduct(req, res, next) {
    try {
        const paramResult = mongoIdSchema.safeParse(req.params);
        const bodyResult = productBodySchema.partial().safeParse(req.body);

        if(!paramResult.success){
            const error = new Error("El ID del producto no es valido");
            error.statusCode = 400;
            throw error;
        }

        if(!bodyResult.success){
            const error = new Error("Datos de producto invalido");
            error.statusCode = 400;
            throw error;
        }

        const product = await productService.updateProduct(paramResult.data.pid, bodyResult.data);
        res.status(200).json({ status: "success", payload: product });
    } catch (error) {
        next(error);
    }
}

export async function deleteProduct(req, res, next) {
    try {
        const result = mongoIdSchema.safeParse(req.params);

        if(!result.success){
            const error = new Error("El ID del producto no es valido");
            error.statusCode = 400;
            throw error;
        }

        const product = await productService.deleteProduct(result.data.pid);
        res.status(200).json({ status: "success", payload: product });
    } catch (error) {
        next(error);
    }
}