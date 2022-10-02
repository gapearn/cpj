const mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345", // << Change this password (✿◠‿◠)
  database: "mydb", // << Change this database name (っ＾▿＾)💨
});

conn.connect();

module.exports = conn;
