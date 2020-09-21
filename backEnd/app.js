const express = require('express')
const app = express()
const port = 8440
const db = require('./db.js');

// app.get('/', (req, res) => {
//     res.sendStatus(200)
// })

app.use(express.urlencoded({ extended: false }))

app.use(express.static('../frontEnd'));


app.get('/post', (req, res) => {
    db.query(`SELECT * FROM MEMO`, (err,rows)=>{
        res.send(rows)
    })
})

app.post('/post', (req, res) => {
    console.log(req.body)
    db.query(`INSERT INTO MEMO(COLOR, PAGEX, PAGEY, TEXT) VALUES(${req.body.color}, ${req.body.pageX}, ${req.body.pageY}, ${req.body.text}`, (err, rows)=>{
        if (err) throw err;
        res.send({  id:rows.insertId,
                    text:req.body.text,
                    color:req.body.color,
                    text:req.body.text,
                    pageX:req.body.pageX,
                    pageY:req.body.pageY
          })
    })
})

app.get('/post/color', (req,res)=>{
    db.query(`UPDATE MEMO SET COLOR = ${req.query.color} WHERE ID = ${req.query.id}`, (err,rows)=>{
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

app.delete('/post', (req, res)=>{
    const postid = req.query.id;
    db.query(`DELETE FROM MEMO WHERE ID = ${postid}`, (err, rows)=>{
        if (err) throw err;
        res.redirect('/post')
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })