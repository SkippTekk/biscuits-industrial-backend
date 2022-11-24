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
invtypes.navbar = () => {
    return new Promise((resolve, reject) => {
            connection.query('select FactionName,iconID,raceIDs,FactionID from chrFactions where corporationID IN (1000084,1000035,1000120,1000051,1000129,1000127,1000162,1000134,1000138,1000135,1000130,1000128,1000298,1000297)', (err, results) => {
                if(err){
                    return reject(err);
                }
                return resolve(results);
            });
    });
};

module.exports = invtypes;