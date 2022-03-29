const express = require("express");
const router = express.Router();

const account_controller = require("./accounts.controller");

router.post("/newAccount", account_controller.new_account);

module.exports = router;
