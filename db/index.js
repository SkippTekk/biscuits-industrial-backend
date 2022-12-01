require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createPool({
    connectionLimit: 100,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: '3306',
    charset: 'utf8mb4_bin'
});

connection.getConnection( (err) =>{
    if(err) {
      console.log(err)}
      else {
        console.log(`Connected to *` +process.env.MYSQL_DATABASE +`* database db/index.js`)
      }
  })

  let invtypes = {};

invtypes.invTypes = () => {
    return new Promise((resolve, reject) => {
            connection.query('select * from chrFactions where corporationID IN (1000084,1000035,1000120,1000051,1000129,1000127,1000162,1000134,1000138,1000135,1000130,1000128,1000298,1000297)', (err, results) => {
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
    });
};
invtypes.tables = () => {
    return new Promise((resolve, reject) => {
        connection.query(`SHOW TABLES`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};
invtypes.ships = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM invTypes WHERE typeName = ?`, id , (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};
invtypes.id = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM invTypes WHERE typeID = ?`, id , (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};
invtypes.build = (id) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT m.materialTypeID, m.quantity, i2.typeName, m.activityID FROM industryActivityMaterials m INNER JOIN invTypes i1 ON i1.typeID = m.typeID INNER JOIN invTypes i2 ON i2.typeID = m.materialtypeID INNER JOIN ramActivities i3 ON i3.activityID = m.activityID = 1 WHERE i1.typeName = ? AND m.activityID = 1 ORDER BY m.materialTypeID ASC`, id , (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};
invtypes.navbar = () => {
    return new Promise((resolve, reject) => {
            connection.query('select * from chrFactions where factionID IN (500003,500001,500004,500002,500014,500010,500019,500012,500011,500020,500016,500018,500026,500027)', (err, results) => {
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
    });
};

module.exports = invtypes;