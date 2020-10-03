const express = require('express');
const router = express.Router();
const db = require('../db.js');
const cookie = require('cookie');

router.use((req, res, next) => {
    if(req.path !== '/'){
        if(!req.cookies.email || !req.cookies.password){
			res.redirect('/')
		} else {
            db.query(`SELECT COUNT(*) as count FROM user WHERE email = '${req.cookies.email}' and password = '${req.cookies.password}'`, (err,rows)=>{ 
                if(rows[0].count === 0){
				res.redirect('/')
                }
            })
        }
    }
    next()
})


router.post('/', (req, res) => {
    console.log(req.body)
    const { email, password } = req.body;
    db.query(`SELECT COUNT(*) as count FROM user WHERE email = '${req.body.email}' and password = '${req.body.password}'`, (err,rows)=>{ 
        if(rows[0].count === 0){
            res.redirect('/')
        } else {
            res.set('Set-Cookie', [`email=${email}`,`password=${password}`]);
            res.send('success')
        }
    });
})


// router.get('/', (req,res)=>{
//     db.query(`SELECT memo.userID, email, id, color,pageX, pageY FROM memo JOIN user ON memo.userID = user.userID WHERE email = '${req.cookies.email}'`, (err,rows)=>{
//         res.send(rows)
//     })
// })


// router.get('/my', (req,res)=>{
//     db.query(`SELECT * FROM user`, (err,rows)=>{
//         res.send(rows)
//     })
// })


module.exports = router;
