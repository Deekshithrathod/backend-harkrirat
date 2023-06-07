const express = require("express");
const router = express.Router();
const solutionController = require("../controllers/solutionController");

router.post("/", solutionController);

module.exports = router;
