import express from "express";
import 'dotenv/config';

import authRouter from "./Routes/auth-router.js"
import connectToDb from "./config/mongoose-connection.js";
import cookieParser from "cookie-parser";

const app = express();
connectToDb();



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

app.use("/auth",authRouter);

app.listen(process.env.PORT,()=>{
    console.log("listening")
})