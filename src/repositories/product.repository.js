import ProductModel from "../models/product.model.js";

class ProductRepository {

  constructor(productModel) {
    this.products = productModel;
  }

  async getAll() {
    return this.products.find().lean();
  }

  async getById(id) {
    return this.products.findById(id).lean();
  }

  async create(productData) {
    return this.products.create(productData);
  }

  async update(id, updates) {
    return this.products.findByIdAndUpdate(
      id,
      updates,
      //returnDocument devuelve el producto ya actualizado
      //runValidators vuelve a correr las validaciones de nuestro esquema
      { returnDocument: "after", runValidators: true }
    );
  }

  async delete(id) {
    return this.products.findByIdAndDelete(id);
  }

};

export const productRepository = new ProductRepository(ProductModel);