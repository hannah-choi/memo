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
		if(!req.cookies.email || !req.cookies.password){
			res.redirect('/login')
		} else {
			if(userCheck(req.cookies.email, req.cookies.password) === false){
				res.redirect('/login')
			}
			
		}


	}

	// else(){

	// }

	next()
})

/* GET home page. */


// else {
	
// }
function userCheck(email, password){
	for(let i = 0; i<users.length; i++){
		if (email !== users[i].email && 
		password !== users[i].password)
		{ return false }
		else { return true }
	}
}

router.get('/', function(req, res, next) {
  let reqCookie = req.headers.cookie;
    if(!reqCookie){
      //console.log('no cookie')
      res.render('login', { title: 'Login' });
    } 
});

router.get('/login', function(req, res, next) {
  //console.log(cookie.parse(req.headers.cookie))
  res.render('login', { title: 'Login' });
});

router.post('/login', function(req, res, next) {
  const { email, password } = req.body;
  	if(userCheck(req.body.email, req.body.password) === true){
		res.set('Set-Cookie', [`email=${email}`, `password= ${password}`])
		res.render('index', { title: 'Express', email: `${email}`, userid: '1' });}
	else{
		res.render('login', { title: 'Login' });
	}
});

router.get('/index', function(req, res, next) {
		res.render('index', { title: 'Express', email: `${req.cookies.email}`, userid: '1' })
	}
)

router.get('/index2', function(req, res, next) {
		res.render('index2', { title: 'Express', email: `${req.cookies.email}`, userid: `${req.cookies.userid}` });
		//res.render('login', { title: 'Login' });
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
