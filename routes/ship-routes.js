const express = require("express");
const router = express.Router();

const getShipByName = require("../controllers/Ship-Controllers/ship-controller");

router.route("/:input").get(getShipByName);

module.exports = router;
