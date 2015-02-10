var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });


router.get('/', function (req, res) {
	res.writeHead(200, {'Content-Type' : 'text/html'});
	res.write('<h3>Welcome</h3>');
	res.write('<a href="/login">Please login</a>');
	res.end();
});

router.get('/login', function (req, res){
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<h3>Login</h3>');
	res.write('<form method="POST" action="/login">');
	res.write('<label name="userId">UserId : </label>')
	res.write('<input type="text" name="userId"><br/>');
	res.write('<label name="password">Password : </label>')
	res.write('<input type="password" name="password"><br/>');
	res.write('<input type="submit" name="login" value="Login">');
	res.write('</form>');
	res.end();
})

router.post('/login', function (req, res){
	var userId = req.param("userId");
	var password = req.param("password")
	
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Thank you, '+userId+', you are now logged in.');
	res.write('<p><a href="/"> back home</a>');
	res.end();
});






module.exports = router;
