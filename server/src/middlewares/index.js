import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";



export const applyMiddleware = (app)=>{
    
// middleware
app.use(cors({
    origin: [
        process.env.LOCAL_CLIENT,
        process.env.LOCAL_CLIENT_SECOND,
        process.env.CLIENT_VERCEL,
        process.env.CLIENT_FIREBASE,
    ],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
}
