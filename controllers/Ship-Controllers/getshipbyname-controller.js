const db = require("../../db/index");

const getShipByName = async (req, res) => {
  const input = req.params.input;

  try {
    db.query(
      `SELECT * FROM invTypes
        INNER JOIN invGroups
        ON invGroups.groupID=invTypes.groupID
        INNER JOIN (select marketGroupID, parentGroupID, marketGroupName, description as marketDesc, iconID, hasTypes from invMarketGroups) invMarketGroups
        ON invMarketGroups.marketGroupID = invTypes.marketGroupID
        AND invGroups.categoryID = 6
        AND invTypes.published = 1
        AND invTypes.typeName = "${input}"
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

module.exports = getShipByName;
