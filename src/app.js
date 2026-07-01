import express from "express";
import { env } from "./config/env.js";
import productsRouter from "./router/products.router.js";
import cartsRouter from "./router/carts.router.js";
const app = express();

app.listen(env.PORT, () => {
    console.log("server levantado en " + env.PORT);
});

// con esta linea el server entiende los body
app.use(express.json(), express.urlencoded({ extended: true }));

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);