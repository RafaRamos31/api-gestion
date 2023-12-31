import express from "express";
import { addRestDirections } from "./expressApi.js";


//Se inicializa un servidor Express para la navegacion entre rutas al acceder a la API
let app = express();

//Se agregan las diferentes rutas /GET y /POST para la manipulacion de datos almacenados en MongoDB
app = addRestDirections(app);

//Se establece el puerto de acceso a la API
app.listen({port: 4000});