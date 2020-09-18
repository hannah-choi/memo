var mysql      = require('mysql');
var db = mysql.createConnection({
  database : 'memosystem',
  host     : 'localhost',
  user     : 'root',
  password : '1111'
});

db.connect();

// connection.query(`SELECT * FROM MEMO`, (err,rows)=>{
//     if (err) throw err;
//     console.log(rows)
// })

db.end();