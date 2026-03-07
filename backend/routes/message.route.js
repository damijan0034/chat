import express from "express"
import { sendMessage } from "../controllers/message.controller.js";
import { checkUser } from "../middlewares/checkUser.js";

const router = express.Router();

router.post("/:id",checkUser,sendMessage)

export default router;