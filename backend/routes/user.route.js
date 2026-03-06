import express from "express";
import { setUser } from "../controllers/user.controller.js";
const router = express.Router();

router.post("/register",setUser)

export default router;