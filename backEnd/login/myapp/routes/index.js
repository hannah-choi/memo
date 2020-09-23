var express = require('express');
var router = express.Router();
var cookie = require('cookie') //외부모듈이라 설치

/* GET home page. */
router.get('/', function(req, res, next) {
  let reqCookie = req.headers.cookie;
    if(!reqCookie){
      //console.log('no cookie')
      res.render('login', { title: 'Login' });
    } else{
      //console.log('cookie')
      res.render('index', { title: 'Express' });
    }
});

router.get('/login', function(req, res, next) {
  console.log(cookie.parse(req.headers.cookie))
  res.render('login', { title: 'Login' });
});

router.post('/login', function(req, res, next) {
  const { username, password } = req.body
  if( username === '1111' && password === '1111' ){
    res.set('Set-Cookie', [`username=${username}`,`password=${password}`, `userid=1`])
    res.render('index', { title: 'Express', username: `${username}`, userid: '1' });
  } else {
    res.render('login', { title: 'Login' });
  }
});

router.get('/index2', function(req, res, next) {
  let reqCookie = cookie.parse(req.headers.cookie)
  //console.log('cookie')
  res.render('index2', { title: 'Express', username: `${reqCookie.username}`, userid: `${reqCookie.userid}` });
});

router.get('/logout', function(req, res, next) {
  res.set('Set-Cookie', [`username=; Max-age=0`,`password=; Max-age=0`])
  res.render('login', { title: 'Login' });
});

module.exports = router;
