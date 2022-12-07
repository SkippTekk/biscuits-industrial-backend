const { db } = require("../../db");

const getShip = async (req, res) => {
  const input = req.params.input;

  let ship;

  try {
    ship = db.query(`SELECT * FROM invTypes WHERE typeName = ${input}`);
  } catch (err) {
    return res.status(500).json({ error: "Unable to query database." });
  }

  if (ship) {
    return res.json(ship);
  } else {
    return res
      .status(404)
      .json({ error: "Unable to locate item within database." });
  }
};

module.exports = getShip;
