import mongoose from "mongoose";
export const connectDB = async () => {
const mongoURI = process.env.DATABASE_LOCAL;
 mongoose.connect(mongoURI, { dbName: process.env.DB_NAME });
 console.log("connected to database");
};


