import express from "express";
import { getOtherUser, getUser, login, logout, register } from "../controllers/user.controller.js";
import {isAuthenticated} from "../middlewares/auth.js"

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.get("/logout", isAuthenticated ,logout)
router.get("/getUser", isAuthenticated , getUser)
router.get("/getOtherUser", isAuthenticated , getOtherUser)



export default router