const { Router } = require("express");
const router = new Router();
const books = require("../Controller/books");
//* home
router.get("/", books.home);
//* creat books
router.post("/creatbooks", books.creatpost);
router.get("/creatbooks", books.creatpost);
//* delete book
router.get("/deletepost/:id", books.deletepost);
//* edite post
router.get("/editpost/:id", books.getedit);
router.post("/editpost/:id", books.editpost);

module.exports = router;
