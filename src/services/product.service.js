import { productRepository } from "../repositories/product.repository.js";

class ProductService {

  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async getProducts(category, maxPrice, limit, page) {
    return this.productRepository.getAll(category, maxPrice, limit, page);
  }

  async getProductById(id) {
    const product = await this.productRepository.getById(id);

    if (!product) {
      const error = new Error("El producto no existe");
      error.statusCode = 404;
      throw error;
    }

    return product;
  }

  async createProduct(productData) {
    const { title, description, price, stock, code, category } = productData;

    if (!title || !description || !price || !stock || !code || !category) {
      const error = new Error("Faltan datos obligatorios");
      error.statusCode = 400;
      throw error;
    }

    const product = await this.productRepository.create(productData);
    return product;
  }

  async updateProduct(id, updates) {
    const product = await this.productRepository.update(id, updates);

    if (!product) {
      const error = new Error("El producto no existe");
      error.statusCode = 404;
      throw error;
    };

    return product;
  }

  async deleteProduct(id) {
    const product = await this.productRepository.delete(id);

    if (!product) {
      const error = new Error("El producto no existe");
      error.statusCode = 404;
      throw error;
    };

    return product;
  }
}

export const productService = new ProductService(productRepository);