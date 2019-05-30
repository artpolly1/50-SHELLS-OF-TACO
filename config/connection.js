// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "password",
  database: "tacos_db"
});


// Make connection.
connection.connect(function(err) {
  if (err) throw err;
});

// Export connection for our ORM to use.
module.exports = connection;
