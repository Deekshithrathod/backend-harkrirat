const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
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

module.exports = router;
