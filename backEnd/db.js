const mysql = require('mysql');
const db = mysql.createConnection({
	database : 'memosystem',
	host     : 'localhost',
	user     : 'root',
	password : '1111'
});

db.connect();

module.exports = db;