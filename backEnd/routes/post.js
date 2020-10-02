const express = require('express');
const router = express.Router();
const db = require('../db.js');

router.get('/', (req, res) => {
    db.query(`SELECT * FROM MEMO`, (err,rows)=>{
        res.send(rows);
    })
})

router.post('/create', (req, res) => {
    db.query(`INSERT INTO MEMO(COLOR, PAGEX, PAGEY) VALUES('lightblue', '${req.body.pageX-200}', '${req.body.pageY}')`, (err, rows)=>{
        if (err) throw err;
        res.send({ 
            text:"",
            color:'lightblue',
            id:rows.insertId,
            pageX:req.body.pageX-200,
            pageY:req.body.pageY                
        });
    });
});

router.get('/color', (req,res)=>{
    db.query(`UPDATE MEMO SET COLOR = '${req.query.color}' WHERE ID = ${req.query.id}`, (err)=>{
        if (err) throw err;
        res.sendStatus(200);
    })
})

router.get('/position', (req,res)=>{
    db.query(`UPDATE MEMO SET pageX = '${req.query.pageX}', pageY = '${req.query.pageY}' WHERE ID = ${req.query.id}`, (err)=>{
        if (err) throw err;
        res.sendStatus(200);
    })
})

router.put('/update', (req, res) => {
    const text = req.body.text;
    const postid = req.body.id;
    db.query(`UPDATE MEMO SET TEXT = '${text}' WHERE ID = ${parseInt(postid)}`, (err) =>{
        if (err) throw err;
        res.sendStatus(200);
    })
})

router.get('/delete', (req, res)=>{
    db.query(`DELETE FROM MEMO WHERE ID = ${req.query.id}`, (err)=>{
        if (err) throw err;
        res.redirect('/');
    })
})

router.delete('/all', (req, res)=>{
    db.query(`DELETE FROM MEMO`, (err)=>{
        if (err) throw err;
        res.redirect('/');
    })
})


router.get('/filter', (req,res)=>{
    db.query(`SELECT * FROM MEMO WHERE COLOR = '${req.query.color}'`, (err,rows)=>{
        if (err) throw err;
        res.send(rows);
    })
})

module.exports = router;