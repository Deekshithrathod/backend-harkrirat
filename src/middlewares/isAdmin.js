const InvalidCredentalsError = require("../errors/invalidCredentialsError");
const NotAdminError = require("../errors/notAdminError");

const User = require("../controllers/loginController").User;

const isAdmin = async (req, res, next) => {
  try {
    if (await checkAdmin(req)) {
      next();
    } else {
      throw new NotAdminError();
    }
  } catch (err) {
    next(err);
  }
};

const checkAdmin = async (req) => {
  const actualCreds = {
    username: req.body.username,
  };

  const resultFromDB = await User.findOne(actualCreds);

  if (!resultFromDB || req.body.password !== resultFromDB.password) {
    throw new InvalidCredentalsError();
  }

  if (resultFromDB.role === "ADMIN") {
    return true;
  }
  return false;
};

module.exports = isAdmin;
