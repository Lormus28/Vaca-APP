import express from 'express';
import cors from 'cors';
import {groups} from './routes/routes_groups.js';

const app = express();

const PORT = 3001;

app.use(express.json());

app.use(cors());

app.use(groups);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});