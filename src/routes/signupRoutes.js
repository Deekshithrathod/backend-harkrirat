const express = require("express");
const router = express.Router();
const roles = ["USER", "ADMIN"];
const User = require("./loginRoutes").User;

router.post("/", (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.json({ msg: "Username & password cannot be empty" }).status(403);
  }

  const user = {
    username: req.body.username,
    password: req.body.password,
    role: req.body.isAdmin ? roles[1] : roles[0],
  };

  const newUser = new User(user);
  newUser.save();

  if (req.body.isAdmin) {
    return res.json({ msg: "Sign-up Admin" });
  }
  return res.json({ msg: "Sign-up User" });
});

module.exports = router;
