import express from "express";
import { setUser,loginUser,logoutUser } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register",setUser)
router.post("/login",loginUser)
router.post("/logout",logoutUser)

export default router;