const db = require("../../db/index");

const getShipByName = async (req, res) => {
  const input = req.params.input;

  try {
    db.query(
      `SELECT * FROM invTypes WHERE typeName = "${input}"`,
      (err, data) => {
        if (err) {
          return res
            .status(404)
            .json({ error: "Unable to locate that item within database." });
        } else {
          return res.json(data);
        }
      }
    );
  } catch (err) {
    return res.status(500).json({ error: "Unable to query database." });
  }
};

module.exports = getShipByName;
