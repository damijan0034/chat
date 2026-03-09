import express from "express"
import { sendMessage,getMessages } from "../controllers/message.controller.js";
import { checkUser } from "../middlewares/checkUser.js";

const router = express.Router();

router.post("/:id",checkUser,sendMessage)
router.get("/:id",checkUser,getMessages)

export default router;