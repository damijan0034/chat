import express from "express";
import { setUser,loginUser,logoutUser } from "../controllers/user.controller.js";
import { checkUser } from "../middlewares/checkUser.js";
const router = express.Router();

router.post("/register",setUser)
router.post("/login",checkUser,loginUser)
router.post("/logout",logoutUser)

export default router;