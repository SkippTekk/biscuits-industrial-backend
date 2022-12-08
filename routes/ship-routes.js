const express = require("express");
const router = express.Router();

const getShipByName = require("../controllers/Ship-Controllers/getshipbyname-controller");
const getShipMaterials = require("../controllers/Ship-Controllers/getshipmaterials-controller");

router.route("/getShipByName/:input").get(getShipByName);
router.route("/getShipMaterials/:input").get(getShipMaterials);

module.exports = router;
