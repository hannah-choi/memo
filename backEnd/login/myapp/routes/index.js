var express = require('express');
var router = express.Router();
var cookie = require('cookie') //외부모듈이라 설치

const users = [
  {
    email:'a@gmail.com',
    password: '1111',
    name:'A'
  },
  {
	email:'b@gmail.com',
	password: '2222',
	name:'B'
  }
]


router.use((req, res, next)=>{

	if(req.path !== '/login'){
		res.redirect('/login')
	}

	for(let i = 0; i < users.length; i++){
		if(req.cookies.email === users[i].email && req.cookies.password === users[i].password){
			req.isLogin = true;
			return;
		}
		else {
			if(req.path !== '/login'){
			res.render('login', { title: 'Login' });}
			//res.render('login', { title: 'Login' });
			req.isLogin = false;
		}		
	}
	next()
})

/* GET home page. */


// else {
	
// }


router.get('/', function(req, res, next) {
  let reqCookie = req.headers.cookie;
    if(!reqCookie){
      //console.log('no cookie')
      res.render('login', { title: 'Login' });
    } 
});

router.get('/login', function(req, res, next) {
  console.log(cookie.parse(req.headers.cookie))
  res.render('login', { title: 'Login' });
});

router.post('/login', function(req, res, next) {
  const { email, password } = req.body;
	for(let i = 0; i<users.length; i++){
		if(email === users[i].email && password === users[i].password){
			res.set('Set-Cookie', [`email=${email}`, `password= ${password}`])
			res.render('index', { title: 'Express', email: `${email}`, userid: '1' });
		} 
	}
});

router.get('/index', function(req, res, next) {
	if(req.isLogin){
		res.render('index', { title: 'Express', email: `${req.cookies.email}`, userid: '1' })
	} 
	}
)


router.get('/index2', function(req, res, next) {
	if(req.isLogin){
		res.render('index2', { title: 'Express', email: `${reqCookie.email}`, userid: `${reqCookie.userid}` });
	} else {
		res.render('login', { title: 'Login' });
	}
	}

	// if (req.cookies.email){
	// 	res.render('index2', { title: 'Express', email: `${req.cookies.email}` });
	// } else  {
	// 	res.render('login', { title: 'Login' });
	// }
  //console.log('cookie')
  //res.render('index2', { title: 'Express', email: `${reqCookie.email}`, userid: `${reqCookie.userid}` });
);

router.get('/logout', function(req, res, next) {
  res.set('Set-Cookie', [`email=; Max-age=0`,`password=; Max-age=0`])
  res.render('login', { title: 'Login' });
});

module.exports = router;
