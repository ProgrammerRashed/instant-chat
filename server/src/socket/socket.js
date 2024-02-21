const http = require("http");
const { Server } = require("socket.io");
const app = require("../app");

const server = http.createServer(app);

const userSocketMap = {};

const io = new Server(server, {
    cors: {
        origin: [
            process.env.LOCAL_CLIENT,
            process.env.LOCAL_CLIENT_SECOND,
            process.env.CLIENT_VERCEL,
            process.env.CLIENT_FIREBASE,
        ],
        methods: ["GET", "POST"],
    },
});

const testData = "TEST DATA"

io.on("connection", (socket) => {
    console.log("a user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId !== "undefined"){ 
      
      userSocketMap[userId] = socket.id
    };

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("user disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

module.exports = { app, io, server, testData };
