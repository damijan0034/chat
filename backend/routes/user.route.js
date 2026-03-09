import express from 'express';
import { getUsers } from '../controllers/user.controller.js';
import { checkUser } from '../middlewares/checkUser.js';

const router = express.Router();

router.get("/",checkUser,getUsers)

export default router