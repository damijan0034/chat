import express from "express";
import { setUser,loginUser,logoutUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register",setUser)
router.post("/login",loginUser)
router.post("/logout",logoutUser)

export default router;