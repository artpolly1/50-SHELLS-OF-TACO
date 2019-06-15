const mysql = require("mysql");
const connectionDetails = process.env.JAWSDB_URL || {
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "tacos_db"
};

const connection = mysql.createConnection(connectionDetails);
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;