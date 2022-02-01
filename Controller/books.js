const mongoose = require("mongoose");
const User = require("../model/schema");
exports.creatpost = (req, res) => {
  try {
    res.render("creatbooks");
    const { name, author, caption } = req.body;
    User.create({ name, author, caption });
  } catch (e) {
    console.log(e.message);
  }
};

exports.deletepost = async (req, res) => {
  try {
    post = await User.findByIdAndRemove(req.params.id);
    console.log(post);
    res.redirect("/");
  } catch (e) {
    console.log(e.message);
  }
};

exports.home = async (req, res) => {
  const post = await User.find();
  try {
    res.render("home", {
      title: "book",
      post,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getedit = async (req, res) => {
  try {
    post = await User.findOne({ _id: req.params.id });
    res.render("editbook", {
      post,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.editpost = async (req, res) => {
  try {
    res.render("editbook");
    const post = await User.findOne({ _id: req.params.id });
    const { name, author, caption } = req.body;
    post.author = author;
    post.name = name;
    post.caption = caption;

    await post.save();
    return res.redirect("/");
  } catch (e) {
    console.log(e.message);
  }
};
