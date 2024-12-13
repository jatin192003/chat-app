import express from "express";
import { getMessage, sendMessage } from "../controllers/message.controller.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.post("/send/:id", isAuthenticated ,sendMessage)
router.get("/getMessages/:id", isAuthenticated, getMessage)



export default router