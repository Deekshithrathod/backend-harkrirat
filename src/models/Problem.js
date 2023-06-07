const mongoose = require("mongoose");

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
module.exports = Problem;
