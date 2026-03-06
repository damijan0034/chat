import express from 'express';
import connection from './DB/connectToMongo.js';
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js"

const app = express();

dotenv.config()
const port=process.env.PORT || 5000

//middlewares
app.use(express.json())

app.use("/api/auth", userRoutes)

app.listen(port,()=>{
    connection()
    console.log(`Server is running on port ${port}`);
})