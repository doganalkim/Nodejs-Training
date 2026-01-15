let mysql = require('mysql2/promise');
require('dotenv').config();

let con = mysql.createPool({
  host: "127.0.0.1",
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD
});

module.exports = con;