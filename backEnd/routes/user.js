const express = require('express');
const router = express.Router();
const db = require('../db.js');

router.get('/', (req,res)=>{
    db.query(`SELECT * FROM user`, (err,rows)=>{
        res.send(rows)
    })
})

router.get('/login', (req, res)=>{
    //res.set('Set-Cookie', [`username=${req.body.username}`,`password=${req.body.password}`, `userID=${req.body.userID}`])
    console.log(req.body)
    db.query(`SELECT COUNT(*) FROM user WHERE email = '${req.body.email}' and password = '${req.body.password}'`, (err,rows)=>{
        //console.log(`SELECT memo.userID, password, id, color,pageX, pageY FROM memo JOIN user ON memo.userID = user.userID WHERE memo.userID = ${parseInt(req.body.userID)}`)
        if(rows[0] === 0){
            console.log('invalid email or pw')
        } else if(rows[0] === 1) {
            res.send(rows)}
    })
  });



// router.get('/my', (req,res)=>{
//     db.query(`SELECT * FROM user`, (err,rows)=>{
//         res.send(rows)
//     })
// })


module.exports = router;
