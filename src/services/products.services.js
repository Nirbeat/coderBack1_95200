import ProductDAO from "../model/ProductDAO.js";

class ProductService {
    async getAllProducts() {
        const products = await ProductDAO.getProducts();
        return products;
    }

    async createProduct(product) {
        const newProduct = await ProductDAO.createProduct(product);
        return newProduct;
    }

    async updateProductById(pid, update) {
        const updatedProduct = ProductDAO.updateProductById(pid, update);
        return updatedProduct;
    }

    async deleteProductById(pid) {
        const deletedProduct = await ProductDAO.deleteProductById(pid);
        return deletedProduct;
    }
}

export default new ProductService();