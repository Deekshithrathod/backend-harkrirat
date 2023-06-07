const { User } = require("../models/User");
const InvalidCredentalsError = require("../errors/invalidCredentialsError");

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

module.exports = login;
