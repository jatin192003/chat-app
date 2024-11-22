import express from "express";
import { config } from "dotenv";
import { connection } from "./config/db.js";
import {errorMiddleware} from "./middlewares/error.js"
import userRoute from "./routes/user.routes.js"
import cors from "cors"



const app = express();
config({path:"./.env"})
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
connection()

app.use(express.json())
app.use('/api/user', userRoute)
app.use(errorMiddleware);
export default app;