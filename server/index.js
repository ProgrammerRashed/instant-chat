
import dotenv from "dotenv";
import { connectDB } from "./src/db/connectDB.js";
import { server } from "./src/socket/socket.js";

dotenv.config();

const port = process.env.PORT || 4000;

const main = async () => {
    connectDB();
    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
};

main();
