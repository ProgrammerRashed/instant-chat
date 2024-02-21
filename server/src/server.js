import dotenv from "dotenv";
import { applyMiddleware } from "./middlewares/index.js";
import express from "express"
//Routes
import authRoutes from './routes/authentication/index.js';
import messageRoutes from "./routes/message/index.js";
import userRoutes from "./routes/users/index.js";
import { globalErrorHandler } from "./utils/globalErrorHandler.js";
const app = express()

dotenv.config();

applyMiddleware(app);

app.use(authRoutes);
app.use(messageRoutes);
app.use(userRoutes);

app.get("/health", (req, res) => {
  res.send("server is running....");
});

// Handling all (get, post, update, delete.....)
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// Error handling middleware
app.use(globalErrorHandler);


export { app }