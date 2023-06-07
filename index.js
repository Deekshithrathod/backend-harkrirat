const express = require("express");
const mongoose = require("mongoose");

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

const roles = ["USER", "ADMIN"];

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: { type: String, enum: roles },
});

const testCaseSchema = new mongoose.Schema({
  input: "String",
  output: "String",
});

const problemSchema = new mongoose.Schema({
  title: String,
  problemStatement: String,
  testcases: [testCaseSchema],
});

const User = new mongoose.model("User", userSchema);
const Problem = new mongoose.model("Problem", problemSchema);
// const user1 = new User({
//   username: "test1@gmail.com",
//   password: "testsub123",
//   role: roles[0],
// });
// user1.save();
// const user2 = new User({
//   username: "abcd@gmail.com",
//   password: "123",
//   role: roles[1],
// });
// user2.save();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "HalWald" });
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  if (!req.body.username || !req.body.password) {
    return res.json({ msg: "Please check username & password" }).status(403);
  }
  const userCreds = await User.findOne({ username: req.body.username });

  if (!userCreds || req.body.password !== userCreds.password) {
    return res.json({ msg: "Wrong credentials" }).status(403);
  }
  return res.json({ msg: `Logged In! You are a ${userCreds.role}` });
});

app.post("/signup", (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.json({ msg: "Username & password cannot be empty" }).status(403);
  }

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
});

app.post("/problems", (req, res) => {
  // verify isAdmin
  // if not return 403
  // else accept the problem
  const problem = {
    title: req.body.title,
    problemStatement: req.body.problemStatement,
    testcases: req.body.testcases,
  };
  const newProblem = new Problem(problem);
  newProblem.save();
  res.json({ msg: "Got the problem" });
});

app.post("/solutions", (req, res) => {
  const problem = {
    problemId: req.body.problemId,
    programLanguage: req.body.programLanguage,
    code: req.body.code,
  };
  // TODO: Run the code & send the output to frontend
  // const newProblem = new Problem(problem);
  // newProblem.save();
  res.json({ msg: problem });
});
