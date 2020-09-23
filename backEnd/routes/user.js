const express = require('express');
const router = express.Router();
const db = require('../db.js');

router.get('/user', (req,res)=>{
    db.query(`SELECT * FROM USERS`, (err,rows)=>{
        res.send(rows)
    })
})

module.exports = router;
