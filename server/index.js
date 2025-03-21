import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import helmet from "helmet"
import morgan from "morgan"
import dotenv from "dotenv"
import fs from "fs"
import uploadRouter from "./route/upload.route.js"
import path from "path"
import connectDB from "./config/connectDB.js"
import userRouter from "./route/user.route.js"
import productRouter from './route/product.route.js'
import categoryRouter from './route/category.route.js'
import subCategoryRouter from "./route/subCategory.route.js"
import cartRouter from "./route/cart.route.js"
import addressRouter from "./route/address.route.js"
import orderRouter from "./route/order.route.js"
dotenv.config()

const PORT=process.env.PORT;
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}` )
    })
})
const app=express()
app.use(cors({
    credentials:true,
    origin:process.env.FRONTEND_URL
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())
const accessLogStream = fs.createWriteStream(
    path.join("./Logs", "access.log"),
    { flags: "a" } 
  );
  app.use(morgan("combined", { stream: accessLogStream }));
app.use(helmet({
    crossOriginResourcePolicy:false
}))

app.use("/api/user",userRouter)
app.use("/api/product",productRouter)
app.use("/api/category",categoryRouter)
app.use("/api/file",uploadRouter)
app.use("/api/subcategory",subCategoryRouter)
app.use("/api/cart",cartRouter)
app.use("/api/address",addressRouter)
app.use('/api/order',orderRouter)







