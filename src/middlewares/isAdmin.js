const isAdmin = (req, res, next) => {
  if (checkAdmin(req)) {
    next();
    return;
  }
  return res.json({ msg: "NOT ADMIN" }).status(403);
};

const checkAdmin = (req) => {
  const actualCreds = {
    username: req.username,
  };
  const resultFromDB = User.findOne(actualCreds);
  if (
    req.body.password === resultFromDB.password &&
    resultFromDB.isAdmin !== true
  ) {
    return true;
  }
  // TODO: Invalid Creds
  return false;
};

module.exports = isAdmin;
