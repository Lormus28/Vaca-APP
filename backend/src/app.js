import express from 'express';
import cors from 'cors';
import {groupRouter, groups} from './routes/group_router.js';

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(cors());

app.use("/groups", groupRouter().routesregister());

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});