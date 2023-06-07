const EmptyCredentalsError = require("../errors/emptyCredentialsError");

const hasCredentials = (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    throw new EmptyCredentalsError("Empty Creds");
  }
  next();
};

module.exports = hasCredentials;
