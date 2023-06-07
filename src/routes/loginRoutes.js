const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const roles = ["USER", "ADMIN"];

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, enum: roles },
});

// const testCaseSchema = new mongoose.Schema({
//   input: "String",
//   output: "String",
// });

// const problemSchema = new mongoose.Schema({
//   title: String,
//   problemStatement: String,
//   testcases: [testCaseSchema],
// });

const User = new mongoose.model("User", userSchema);
router.post("/", async (req, res) => {
  console.log(req.body);
  if (!req.body.username || !req.body.password) {
    return res.json({ msg: "Please check username & password" }).status(403);
  }
  const userCreds = await User.findOne({ username: req.body.username });

  if (!userCreds || req.body.password !== userCreds.password) {
    return res.json({ msg: "Wrong credentials" }).status(403);
  }
  return res.json({ msg: `Logged In! You are a ${userCreds.role}` });
});

module.exports = { router, User };
