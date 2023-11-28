import express from "express"
import dotenv from "dotenv"
import router from "./router.js"
import mongoose from "mongoose"
import cors from "cors"
dotenv.config()

const app = express()
app.use(express.json())

app.use(cors())
app.use((req, res, next) => {
        res.header('Access-Control-Expose-Headers', 'X-Auth-Token, name');
        next();
});
app.use("/api",router)


const PORT = process.env.PORT
const DB_URL = process.env.DB_URL

app.listen(PORT,() => console.log(`Server is running on PORT: ${PORT}`))

mongoose.connect(DB_URL)
.then(()=>console.log(`DB connected`))
.catch((error)=>console.log(`No connection`))