const express = require('express')
const app = express()
const port = 8440
const db = require('./db.js');
let bodyParser = require('body-parser');

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static('../frontEnd'));


app.get('/post', (req, res) => {
    db.query(`SELECT * FROM MEMO`, (err,rows)=>{
        res.send(rows)
    })
})

app.post('/post/create', (req, res) => {
    db.query(`INSERT INTO MEMO(COLOR, PAGEX, PAGEY) VALUES('lightblue', '${req.body.pageX}', '${req.body.pageY}')`, (err, rows)=>{
        if (err) throw err;
        res.send({ 
                    text:"",
                    color:'lightblue',
                    id:rows.insertId,
                    pageX:req.body.pageX,
                    pageY:req.body.pageY                
          })
    })
})

app.get('/post/color', (req,res)=>{
    db.query(`UPDATE MEMO SET COLOR = '${req.query.color}' WHERE ID = ${req.query.id}`, (err,rows)=>{
        if (err) throw err;
        res.redirect('/post')
    })
})

app.get('/post/position', (req,res)=>{
    db.query(`UPDATE MEMO SET pageX = '${req.query.pageX}', pageY = '${req.query.pageY}' WHERE ID = ${req.query.id}`, (err,rows)=>{
        if (err) throw err;
        res.redirect('/post')
    })
})

app.put('/post', (req, res) => {
    const text = req.body.text;
    const postid = req.body.id;
    db.query(`UPDATE MEMO SET TEXT = ${text} WHERE ID = ${postid}`, (err,rows) =>{
        if (err) throw err;
        res.redirect('/post')
    })
})

app.get('/post/delete', (req, res)=>{
    console.log(req.query.id)
    db.query(`DELETE FROM MEMO WHERE ID = ${req.query.id}`, (err, rows)=>{
        if (err) throw err;
        res.redirect('/post')
    })
})

app.delete('/post/all', (req, res)=>{
    db.query(`DELETE FROM MEMO`, (err, rows)=>{
        if (err) throw err;
        res.redirect('/post')
    })
})


app.get('/post/filter', (req,res)=>{
    db.query(`SELECT * FROM MEMO WHERE COLOR = '${req.query.color}'`, (err,rows)=>{
        if (err) throw err;
        res.send(rows)
    })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })