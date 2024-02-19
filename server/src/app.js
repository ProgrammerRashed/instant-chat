const applyMiddleware = require("./middlewares");
const globalErrorHandler = require("./utils/globalErrorHandler");
require("dotenv").config();

const authRoutes = require('./routes/authentication');
const messageRoutes = require("./routes/message")
const userRoutes = require("./routes/users");
const { app } = require("./socket/socket");
applyMiddleware(app);


app.use(authRoutes)
app.use(messageRoutes)
app.use(userRoutes)



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