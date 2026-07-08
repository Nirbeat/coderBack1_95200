import ProductDAO from "../model/ProductDAO.js";
import CartDAO from "../model/CartDAO.js";

class CartRepository {
    constructor(ProductDAO, CartDAO) {
        this.ProductDAO = ProductDAO;
        this.CartDAO = CartDAO;
    }

    async addProductToCart(cid, pid) {
        let requiredCart = await this.CartDAO.getCartById(cid);
        if (!requiredCart) return "el carrito solicitado no existe";

        const requiredProduct = await this.ProductDAO.getProductById(pid);
        if (!requiredProduct) return "el producto solicitado no existe";

        return await this.CartDAO.addProductToCart(cid, pid);
    }
}

export default new CartRepository(ProductDAO, CartDAO);