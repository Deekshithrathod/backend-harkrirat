const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const testCaseSchema = new mongoose.Schema({
  input: "String",
  output: "String",
});

const problemSchema = new mongoose.Schema({
  title: String,
  problemStatement: String,
  testcases: [testCaseSchema],
});

const Problem = new mongoose.model("Problem", problemSchema);
router.post("/", (req, res) => {
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

module.exports = router;
