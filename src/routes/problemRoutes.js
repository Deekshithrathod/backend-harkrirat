const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const problemController = require("../controllers/problemController");

router.post("/", problemController);

module.exports = router;
