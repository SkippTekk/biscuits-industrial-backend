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
            connection.query(`SELECT * FROM invTypes`, (err, results) => {
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
invtypes.list = (id) => {

    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM ?', [id] , (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = invtypes;