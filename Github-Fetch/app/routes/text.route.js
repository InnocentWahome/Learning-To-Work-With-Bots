const express = require("express");
const router = express.Router();

const { EmployeeController } = require("../controllers");

router.post("", EmployeeController.listenToMessage);

module.exports = router;
