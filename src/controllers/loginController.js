const mongoose = require("mongoose");
const InvalidCredentalsError = require("../errors/invalidCredentialsError");

const roles = ["USER", "ADMIN"];

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, enum: roles },
});

const User = new mongoose.model("User", userSchema);

const login = async (req, res, next) => {
  try {
    const userCreds = await User.findOne({ username: req.body.username });

    if (!userCreds || req.body.password !== userCreds.password) {
      throw new InvalidCredentalsError();
    }
    return res.json({ msg: `Logged In! You are a ${userCreds.role}` });
  } catch (err) {
    next(err);
  }
};

module.exports = { login, User };
