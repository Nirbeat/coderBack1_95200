import CartDAO from "../model/CartDAO.js";
import CartsService from "../services/carts.services.js";

export async function createCart(req, res, next) {
    try {
        const cart = await CartDAO.createCart();
        res.status(201).json({ message: "carrito creado", cart });
    } catch (error) {
        next(error);
    }
}

export async function addProductToCart(req, res, next) {
    try {
        const { pid, cid } = req.params;
        const cart = await CartsService.addProductToCart(cid, pid);
        res.status(200).json({ message: "producto añadido", cart });
    } catch (error) {
        next(error);
    }
}