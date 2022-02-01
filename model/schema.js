const mongoos = require("mongoose")
const userschema = new mongoos.Schema({
    name: { type: String, minlength: 1, required: true },
    author: { type: String, minlength: 1, required: true },
    caption: { type: String, minlength: 1, required: true },
})
module.exports = mongoos.model("books", userschema)
