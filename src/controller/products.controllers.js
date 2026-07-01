import ProductManager from "../managers/ProductManager.js";

export async function getAllProducts(req, res, next) {
    try {
        const products = await ProductManager.getProducts();
        res.status(200).json(products);
    } catch (error) {
        next(error);
    }
}

export async function createProduct(req, res, next) {
    try {
        const product = await ProductManager.createProduct(req.body);
        res.status(201).json({ message: "producto creado", product });
    } catch (error) {
        next(error);
    }
}

export async function updateProduct(req, res, next) {
    try {
        const { pid } = req.params;
        const updatedProduct = await ProductManager.updateProductById(pid, req.body);
        res.status(200).json({ message: "producto actualizado", updatedProduct });
    } catch (error) {
        next(error);
    }
}

export async function deleteProduct(req, res, next) {
    try {
        const { pid } = req.params;
        const deletedProduct = await ProductManager.deleteProductById(pid);
        res.status(200).json({ message: "producto actualizado", deletedProduct });
    } catch (error) {
        next(error);
    }
}