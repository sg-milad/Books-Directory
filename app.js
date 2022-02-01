const express = require("express")
const dotenv = require("dotenv")
const path = require("path")
const mongoose = require("mongoose")
const app = express()
//* 
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
//* database
const connect = require("./model/connact")
//* set engine
app.set('views', 'views');
app.set('view engine', 'ejs');
//* ruots
const books = require("./routers/books")
app.use(books)
//* config
dotenv.config(".env")
//*
app.listen(process.env.port, () => {
    console.log(`runing in ${process.env.port}`);
})
