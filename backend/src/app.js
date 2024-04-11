import express from 'express';
import cors from 'cors';
import {groupRouter} from './routes/group_router.js'

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json()); // le dice a el modelo express que emplee el json como expresion dentro del código

app.use(cors()); //permite que un back y un front se comuniquen EN EL NAVEGADOR usando puertos distintos, postman no le importa esto y por eso no lo pide, en el codigo real se debe dar parametros para la seguridad del cors

app.use("/groups", groupRouter().routesregister()); //Importa el CRUD del router y los registros que utilizan el modelo de node con sus entidades

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`); // levanta el servidor en el puerto deseado
});