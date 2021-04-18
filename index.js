import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes.js';

dotenv.config()

const app = express();
app.use(express.json())
const port = process.env.PORT;

app.listen(port, () => {
    routes(app);
    console.log(`auth is running on port ${port}`)
})