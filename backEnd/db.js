var mysql      = require('mysql');
var connection = mysql.createConnection({
  database : 'memosystem',
  host     : 'localhost',
  user     : 'root',
  password : '1111'
});

connection.connect();

connection.query(`SELECT * FROM MEMO`, (err,rows)=>{
    if (err) throw err;
    console.log(rows)
})

connection.end();