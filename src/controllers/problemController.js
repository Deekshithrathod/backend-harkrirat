const Problem = require("../models/Problem");

const addProblem = (req, res) => {
  // validity of the problem
  // if not return 403
  // else accept the problem
  const problem = {
    title: req.body.title,
    problemStatement: req.body.problemStatement,
    testcases: req.body.testcases,
  };
  const newProblem = new Problem(problem);
  newProblem.save();
  res.json({ msg: "Problem accepted" });
};

module.exports = addProblem;
