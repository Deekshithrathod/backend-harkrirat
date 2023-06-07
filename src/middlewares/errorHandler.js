const EmptyCredentalsError = require("../errors/emptyCredentialsError");
const InvalidCredentalsError = require("../errors/invalidCredentialsError");
const NotAdmin = require("../errors/notAdminError");

const errorMiddleware = (err, req, res, next) => {
  if (err instanceof EmptyCredentalsError) {
    return res.status(400).json({ msg: "Username, password cannot be empty" });
  } else if (err instanceof InvalidCredentalsError) {
    return res.status(403).json({ msg: "Username|Password|Both are Invalid" });
  } else if (err instanceof NotAdmin) {
    return res.status(403).json({ msg: "Not ADMIN, please contact support" });
  } else {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = errorMiddleware;
