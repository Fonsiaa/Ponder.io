import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./route/userRoute.js";

dotenv.config() 

const app = express();
const port = 2824;

app.use(cors());

app.use(express.json());
app.use('/api/user', userRoutes);

const dbURI = process.env.DB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURI);
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error('404 Error',err.message);
    }
};

connectDB();

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})