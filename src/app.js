import express from "express";
import { env } from "./config/env.js";

const app = express();

app.listen(env.PORT, () => {
    console.log("server levantado en " + env.PORT);
});

// app.get("/", async (req, res, next) => {
//     res.status(203).send("hola chicos de la 95200");
//     // res.json({ mensaje: "hola chicos de la 95200" });
//     // res.download("src/app.js");
// });

// const nombres = ["maxi", "lucas", "amadeo", "lucia"];
// app.get("/parametro/:indiceNombres/:loquesea/:niidea", async (req, res, next) => {
//     const { params } = req;

//     res.status(200).send("probando parametros en ruta. Nombre :" + nombres[params.indiceNombres] + params.loquesea + params.niidea)
// });

// app.get("/query", async (req, res, next) => {
//     const { query } = req;
//     res.status(200).send(`valor de la query = ${query.numero}`);
// });

// app.use(express.json(), express.urlencoded({ extended: true }));

// app.post("/",
//     // express.json(),
//     async (req, res, next) => {
//         const { body } = req;
//         res.json(body);
//     });

// app.put("/",
//     // express.json(),
//     async (req, res, next) => {
//         const { body } = req;
//         res.json(body);
//     });

// app.delete("/",
//     // express.json(),
//     async (req, res, next) => {
//         const { body } = req;
//         res.json(body);
//     });

// app.get("/middleware",
//     (req, res, next) => {
//         try {
//             // proceso la informacion o ejecuto logica a mi gusto
//             req.saludo = "hola";
//             throw new Error("error a proposito");
//         } catch (error) {
//             next(error);
//         }
//     },
//     async (req, res, next) => {
//         res.status(200).send(req.saludo);
//     });

// app.use((err, req, res, next) => {
//     res.status(500).json({ message: "error " + err.message });
// });