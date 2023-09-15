const mysql = require('mysql2');

const Connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'aman',
    database:'aman1'
})
Connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

  module.exports = Connection;