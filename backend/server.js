import express from 'express';
import connection from './DB/connectToMongo.js';
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js"
import messageRoutes from "./routes/message.route.js"
import authRoutes from "./routes/auth.route.js"
import cookiesParser from "cookie-parser"

const app = express();

dotenv.config()
const port=process.env.PORT || 5000

//middlewares
app.use(express.json())
app.use(cookiesParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users",userRoutes)

app.listen(port,()=>{
    connection()
    console.log(`Server is running on port ${port}`);
})