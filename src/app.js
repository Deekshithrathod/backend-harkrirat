const express = require("express");
const mongoose = require("mongoose");
const loginRouter = require("./routes/loginRoutes");
const signupRouter = require("./routes/signupRoutes");
const problemRouter = require("./routes/problemRoutes");
const solutionRouter = require("./routes/solutionRoutes");
const hasCreds = require("./middlewares/hasCreds");
const isAdmin = require("./middlewares/isAdmin");
const errorMiddleware = require("./middlewares/errorHandler");

const app = express();

const PORT = 3000;
const mongoURI =
  process.env.MONGO_URI || "mongodb://localhost:27017/harkiratDB";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    // Start the Express server here
    app.listen(PORT, () => {
      console.log(`Server has started on ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
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
