const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'fullstack-test'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected DB!");
});

module.exports = connection