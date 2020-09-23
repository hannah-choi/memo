const express = require('express');
const router = express.Router();
const db = require('../db.js');

router.get('/', (req,res)=>{
    db.query(`SELECT * FROM user`, (err,rows)=>{
        res.send(rows)
    })
})

router.post('/login', (req, res)=>{
    res.set('Set-Cookie', [`username=${req.body.username}`,`password=${req.body.password}`, `userID=${req.body.userID}`])
    db.query(`SELECT text, id, color, pageX, pageY FROM memo JOIN user ON memo.userID = user.userID WHERE memo.userID = ${parseInt(req.body.userID)}`, (err,rows)=>{
        //console.log(`SELECT memo.userID, password, id, color,pageX, pageY FROM memo JOIN user ON memo.userID = user.userID WHERE memo.userID = ${parseInt(req.body.userID)}`)
        res.send(rows)
    })
  });



// router.get('/my', (req,res)=>{
//     db.query(`SELECT * FROM user`, (err,rows)=>{
//         res.send(rows)
//     })
// })


module.exports = router;
