import ProductModel from "../models/product.model.js";

class ProductRepository {

  constructor(productModel) {
    this.products = productModel;
  }

  async getAll(category, maxPrice, limit, page) {
    return this.products.paginate({
      ...( category && { category } ),
      ...( maxPrice && { price: { $lte: Number(maxPrice) } } )
    }, { limit, page });
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