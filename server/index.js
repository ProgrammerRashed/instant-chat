const connectDB = require("./src/db/connectDB");
const { server } = require("./src/socket/socket");
require("dotenv").config();
const port = process.env.PORT || 4000;
const main = async ()=>{
    connectDB()
    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
   
}


main()
