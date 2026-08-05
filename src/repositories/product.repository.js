import ProductModel from "../models/product.model.js";

class ProductRepository {

  constructor(productModel) {
    this.products = productModel;
  }

  async getAll(category, maxPrice, limit, page, sortBy = "createdAt", order = "asc") {

    const sortOrder = order === "asc" ? 1 : -1;

    return this.products.paginate({
      ...( category && { category } ),
      ...( maxPrice && { price: { $lte: Number(maxPrice) } } )
    }, { 
      limit,
      page,
      sort: { [sortBy]: sortOrder },
      lean: true
    });
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