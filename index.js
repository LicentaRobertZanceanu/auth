import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes.js';
import cors from 'cors';

dotenv.config()

const app = express();
app.use(express.json())
app.use(cors())
const port = process.env.PORT;

app.listen(port, () => {
    routes(app);
    console.log(`auth is running on port ${port}`)
})