import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
if(!process.env.MONGODB_URL){
throw new Error("Please provide MONDODB_URL in .env file")
}

async function connectDB() {
   
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Mongoose connected")
    } catch (error) {
        console.log("Error connect DB",error)
        process.exit(1)
    }
}
export default connectDB;