const runSolution = (req, res) => {
  const problem = {
    problemId: req.body.problemId,
    programLanguage: req.body.programLanguage,
    code: req.body.code,
  };
  // TODO: Validate solution & Run the code & send the output to frontend
  res.json({ msg: problem });
};

module.exports = runSolution;
