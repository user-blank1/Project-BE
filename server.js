import express from "express";
import mongoose from "mongoose";
import { load_companies } from "./controllers/companyRoutes.js";

import dotenv from "dotenv";
dotenv.config();
mongoose
    .connect(process.env.DB_URI)
    .then((result) => {
        app.listen(3000);
        console.log("http://localhost:3000");
    })
    .catch((err) => {
        console.error("Database connection error:", err);
    });
const app = express();

app.get("/companies", load_companies);
