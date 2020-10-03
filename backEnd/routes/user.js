const express = require('express');
const router = express.Router();
const db = require('../db.js');

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
    const { email, password } = req.body;
    db.query(`SELECT COUNT(*) as count FROM user WHERE email = '${req.body.email}' and password = '${req.body.password}'`, (err,rows)=>{ 
        if(rows[0].count === 0){
            res.send('fail')
        } else {
            res.set('Set-Cookie', [`email=${email}`,`password=${password}`]);
            res.send('success');
            //res.redirect('/memo.html')
        }
    });
})

router.get('/logout', (req, res)=>{
    res.clearCookie('email');
    res.clearCookie('password');
    //res.set('Set-Cookie', ['email=; Max-Age=0;','password=; Max-Age=0']);
    res.redirect('/')
})

module.exports = router;
