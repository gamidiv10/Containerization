const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "database-1.c8qxvnwhlw4x.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "password",
  database: "serverless2"
  });
  
  connection.connect((err) => {
    if (!err) {
      console.log("Connected");
    } else {
      console.log(err);
    }
  });
  
  module.exports = connection;