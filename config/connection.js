
const mysql = require("mysql");

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

const connection = mysql.createConnection({
  port: 3306,
  host: "t89yihg12rw77y6f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "wmyl71264lvjg2of",
  password: "oviipre2z8vtw7bc",
  database: "tlcv2vx9nm5qxtul"

  // host: "localhost",
  // user: "root",
  // password: "password",
  // database: "tacos_db"

  });


};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;