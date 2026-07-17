import express from "express";
import { env } from "./config/env.js";
import productsRouter from "./router/products.router.js";
import cartsRouter from "./router/carts.router.js";
import { connectDB } from "./config/db.js";

const app = express();


// con esta linea el server entiende los body
app.use(express.json(), express.urlencoded({ extended: true }));

app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

//middleware de errores
app.use((error, req, res, next)=> {
    res.status( error.statusCode || 500 ).json({ status: "error", message: error.message });
});

try {
    await connectDB();
    app.listen(env.PORT, () => {
        console.log("server levantado en " + env.PORT);
    });
} catch (error) {
    console.error("Error al levantar el servidor");
}