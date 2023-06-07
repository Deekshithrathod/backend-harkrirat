const express = require("express");
const router = express.Router();
const problemController = require("../controllers/problemController");

//TODO: Use isAdmin middleware to check if the user is admin
router.post("/", problemController);

module.exports = router;
