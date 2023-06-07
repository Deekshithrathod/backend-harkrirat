const express = require("express");
const router = express.Router();
const loginController = require("../controllers/loginController").login;

router.post("/", loginController);

module.exports = router;
