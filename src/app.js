const express = require("express");
const mongoose = require("./db/connection");
const loginRouter = require("./routes/loginRoutes");
const signupRouter = require("./routes/signupRoutes");
const problemRouter = require("./routes/problemRoutes");
const solutionRouter = require("./routes/solutionRoutes");
const hasCreds = require("./middlewares/hasCreds");
const isAdmin = require("./middlewares/isAdmin");
const errorMiddleware = require("./middlewares/errorHandler");

const app = express();

const PORT = 3000;

mongoose.connection.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Hal0 Wald" });
});

app.use("/login", hasCreds, loginRouter);
app.use("/signup", hasCreds, signupRouter);
app.use("/problems", hasCreds, isAdmin, problemRouter);
app.use("/solutions", solutionRouter);

app.use(errorMiddleware);

module.exports = app;
