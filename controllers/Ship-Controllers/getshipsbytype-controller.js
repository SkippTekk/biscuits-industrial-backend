const db = require("../../db/index");

const getShipsByType = (req, res) => {
  const race = req.params.race;

  try {
    db.query(
      `
      SELECT 
          invTypes.typeName,
          invTypes.typeID,
          invTypes.raceID,
          invTypes.marketGroupID,
          invMarketGroups.marketGroupName
      FROM
          invTypes
              JOIN
          (SELECT 
              groupID, groupName, categoryID
          FROM
              invGroups) invGroups ON invGroups.groupID = invTypes.groupID
              JOIN
          (SELECT 
              marketGroupID, marketGroupName
          FROM
              invMarketGroups) invMarketGroups ON invMarketGroups.marketGroupID = invTypes.marketGroupID
      WHERE
          invTypes.raceID = ${race}
              AND invGroups.categoryID = 6
              AND invTypes.published = 1
        `,
      (err, data) => {
        if (err) {
          return res.status(404).json({
            error: "Unable to locate that item within database.",
          });
        } else {
          return res.status(200).json(data);
        }
      }
    );
  } catch (err) {
    return res
      .status(500)
      .json({ error: "Unable to execute query on the database." });
  }
};

module.exports = getShipsByType;
