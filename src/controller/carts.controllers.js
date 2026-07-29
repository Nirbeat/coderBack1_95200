import Cart from "../models/cart.model.js";

export async function createCart(req, res, next) {
    try {
        const cart = await Cart.create({});
        res.status(201).json({ status: "success", payload: cart });
    } catch (error) {
        next(error);
    }
}

export async function addProductToCart(req, res, next) {
    try {
        const { cid, pid } = req.params;
        const { quantity } = req.body;

        //verificar que el producto exista
        
        //verificar que el carrito exista

        //verificar si el producto existe en el carrito
            //si existe, incrementar la cantidad
            // si no existe, agregarlo como nuevo
        const updatedCart = await Cart.findByIdAndUpdate(cid, { $push : { products : { product: pid , quantity } } }, { new: true, runValidators: true });
        res.status(200).json({ status: "success", payload: updatedCart })
    } catch (error) {
        next(error);
    }
}

export async function getProductsInCart(req, res, next) {
    try {
        const cid = req.params.cid;

        const cart = await Cart.findById(cid).populate("products.product");
        //comprobar que el carrito existe

        res.status(200).json({ status: "success", payload: cart.products })
    } catch (error) {
        next(error);
    }
}