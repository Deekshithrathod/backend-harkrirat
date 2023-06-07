const mongoose = require("mongoose");

const roles = ["USER", "ADMIN"];

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, enum: roles },
});

const User = new mongoose.model("User", userSchema);

const login = async (req, res) => {
  const userCreds = await User.findOne({ username: req.body.username });

  if (!userCreds || req.body.password !== userCreds.password) {
    return res.json({ msg: "Wrong credentials" }).status(403);
  }
  return res.json({ msg: `Logged In! You are a ${userCreds.role}` });
};

module.exports = { login, User };
