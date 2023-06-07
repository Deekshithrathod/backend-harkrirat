const { roles, User } = require("../models/User");
// const User = require("../controllers/loginController").User;

const signup = (req, res) => {
  // TODO: Don't allow duplicates i.e. users with same email ID to sign-up multiple times
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
};

module.exports = signup;
