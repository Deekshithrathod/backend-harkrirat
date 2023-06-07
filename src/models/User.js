const mongoose = require("mongoose");

const roles = ["USER", "ADMIN"];

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, enum: roles },
});

const User = new mongoose.model("User", userSchema);

module.exports = { User, roles };
