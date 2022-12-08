const db = require("../../db/index");

const getShipMaterials = async (req, res) => {
  const input = req.params.input;

  try {
    db.query(
      `SELECT m.materialTypeID, m.quantity, i2.typeName, m.activityID 
      FROM industryActivityMaterials m 
      INNER JOIN invTypes i1 
      ON i1.typeID = m.typeID 
      INNER JOIN invTypes i2 
      ON i2.typeID = m.materialtypeID 
      INNER JOIN ramActivities i3 
      ON i3.activityID = m.activityID = 1 
      WHERE i1.typeName = "${input} Blueprint"
      AND m.activityID = 1 
      ORDER BY m.materialTypeID ASC
      `,
      (err, data) => {
        if (err) {
          return res
            .status(404)
            .json({ error: "Unable to locate that item within database." });
        } else {
          return res.status(200).json(data);
        }
      }
    );
  } catch (err) {
    return res.status(500).json({ error: "Unable to query database." });
  }
};

module.exports = getShipMaterials;
