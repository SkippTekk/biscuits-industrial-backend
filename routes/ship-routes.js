const express = require("express");
const router = express.Router();

const getShipByName = require("../controllers/Ship-Controllers/getshipbyname-controller");

router.route("/getShipByName/:input").get(getShipByName);

module.exports = router;
