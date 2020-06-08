const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "vamsigamidi",
    database: "mydb"
  });
  
  connection.connect((err) => {
    if (!err) {
      console.log("Connected");
    } else {
      console.log(err);
    }
  });
  
  module.exports = connection;