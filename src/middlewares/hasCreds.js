const hasCredentials = (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    return res.json({ msg: "Username & password cannot be EMPTY" }).status(403);
  }
  next();
};

module.exports = hasCredentials;
