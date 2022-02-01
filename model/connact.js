const mongoose = require("mongoose")
const dotenv = require("dotenv")
dotenv.config("./.env")
mongoose.connect(process.env.mongo_url, () => {
    console.log("cnnacted");
});