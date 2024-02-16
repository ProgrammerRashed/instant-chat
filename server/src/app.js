const express = require("express");
const applyMiddleware = require("./middlewares");
const globalErrorHandler = require("./utils/globalErrorHandler");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 4000;


applyMiddleware(app);


// app.use(authRoutes)
// app.use(saveUserData)

app.get("/health", (req, res) => {
  res.send("server is running....");
});

// handling all (get, post, update, delete.....)
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);



module.exports = app