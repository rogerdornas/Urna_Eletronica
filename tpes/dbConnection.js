const mysql = require("mysql2");

const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "#5d5ffeM",
  database: "urna",
});

module.exports = pool;