const User = require("../controllers/loginController").User;

const isAdmin = async (req, res, next) => {
  if (await checkAdmin(req)) {
    next();
    return;
  }
  return res.json({ msg: "NOT ADMIN" }).status(403);
};

const checkAdmin = async (req) => {
  const actualCreds = {
    username: req.body.username,
  };
  const resultFromDB = await User.findOne(actualCreds);

  if (
    resultFromDB &&
    req.body.password === resultFromDB.password &&
    resultFromDB.role === "ADMIN"
  ) {
    return true;
  }
  // TODO: Invalid Creds
  return false;
};

module.exports = isAdmin;
