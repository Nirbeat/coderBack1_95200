import express from "express";
import { env } from "./config/env.js";
import productsRouter from "./router/products.router.js";
import cartsRouter from "./router/carts.router.js";
import { connectDB } from "./config/db.js";
import { engine } from "express-handlebars";
import viewsRouter from "./router/views.router.js";
import http from "http";
import { Server } from "socket.io";
import { productService } from "./services/product.service.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// con esta linea el server entiende los body
app.use(express.json(), express.urlencoded({ extended: true }));

//handlebars config
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

app.use("/", viewsRouter);
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);

//middleware de errores
app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).json({ status: "error", message: error.message });
});

//websockets
io.on("connection", (socket) => {
    console.log("Cliente conectado con ID " + socket.id);

    socket.on("update product", async({ id, status })=> {
        await productService.updateProduct(id, { status });

        //emitimos un evento de forma global
        const products = await productService.getProducts();
        io.emit("updated products", { products });
    });
});

try {
    await connectDB();
    server.listen(env.PORT, () => {
        console.log("server levantado en " + env.PORT);
    });
} catch (error) {
    console.error("Error al levantar el servidor");
}