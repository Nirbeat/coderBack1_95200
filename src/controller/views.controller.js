import { productService } from "../services/product.service.js";

export async function renderHome(req, res, next) {
  try {
    const products = await productService.getProducts();
    res.render("home", { products: products.docs });
  } catch (error) {
    next(error);
  }
}

export async function renderDashboard(req, res, next) {
  try {
    const products = await productService.getProducts();
    res.render("dashboard", { products: products.docs });
  } catch (error) {
    next(error);
  }
}