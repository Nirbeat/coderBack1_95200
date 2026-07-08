import ProductServices from "../services/products.services.js";

export async function getAllProducts(req, res, next) {
    try {
        const products = await ProductServices.getAllProducts(req);
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
}

export async function createProduct(req, res, next) {
    try {
        const product = await ProductServices.createProduct(req.body);
        res.status(201).json({ message: "producto creado", product });
    } catch (error) {
        next(error);
    }
}

export async function updateProduct(req, res, next) {
    try {
        const { pid } = req.params;
        const updatedProduct = await ProductServices.updateProductById(pid, req.body);
        res.status(200).json({ message: "producto actualizado", updatedProduct });
    } catch (error) {
        next(error);
    }
}

export async function deleteProduct(req, res, next) {
    try {
        const { pid } = req.params;
        const deletedProduct = await ProductServices.deleteProductById(pid);
        res.status(200).json({ message: "producto actualizado", deletedProduct });
    } catch (error) {
        next(error);
    }
}