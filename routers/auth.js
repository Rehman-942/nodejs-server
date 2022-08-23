const express = require("express");
const signinController = require("../controllers/auth");

const router = express.Router();

router.post("/signin", signinController.signin);

module.exports = router;
