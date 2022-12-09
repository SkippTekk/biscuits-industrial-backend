const db = require("../../db/index");

const getShipByName = async (req, res) => {
  const input = req.params.input;

  let shipData = [];

  try {
    db.query(
      `SELECT 
      invTypes.typeID,
      invTypes.groupID,
      invTypes.typeName,
      invTypes.description,
      invTypes.mass,
      invTypes.volume,
      invTypes.capacity,
      invTypes.marketGroupID,
      invTypes.basePrice,
      invMarketGroups.marketGroupName,
      invGroups.groupName
  FROM
      invTypes
          JOIN
      (SELECT 
          groupID, categoryID, groupName
      FROM
          invGroups) invGroups ON invGroups.groupID = invTypes.groupID
          JOIN
      (SELECT 
          marketGroupID, marketGroupName
      FROM
          invMarketGroups) invMarketGroups ON invMarketGroups.marketGroupID = invTypes.marketGroupID
          AND invGroups.categoryID = 6
          AND invTypes.published = 1
          AND invTypes.typeName = "${input}"`,
      (err, data) => {
        if (err) {
          return res.status(404).json({
            error: "Unable to locate that item within database.",
          });
        } else {
          shipData.push({ ship: data[0] });
        }
      }
    );

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
          shipData.push({ materials: data });
          return res.json(shipData);
        }
      }
    );
  } catch (err) {
    return res.status(500).json({ error: "Unable to query database." });
  }
};

module.exports = getShipByName;
