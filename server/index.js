const connectDB = require("./src/db/connectDB");
require("dotenv").config();
const http = require("http")
const app = require("./src/app")
const server = http.createServer(app)
const port = process.env.PORT || 3000;
const main = async ()=>{
    connectDB()
    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
   
}


main()
