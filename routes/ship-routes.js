const express = require("express");
const router = express.Router();

const getShipByName = require("../controllers/Ship-Controllers/getshipbyname-controller");
const getShipsByType = require("../controllers/Ship-Controllers/getshipsbytype-controller");

router.route("/getShipByName/:input").get(getShipByName);
router.route("/getShipsByType/:race").get(getShipsByType);

module.exports = router;
