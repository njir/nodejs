var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var pool = mysql.createPool({
	connectionLimit : 150,
	host			: '127.0.0.1',
	user			: 'root',
	password		: '1234',
	database		: 'test'
});

/* GET home page. */
router.get('/', function(req, res) {
  console.log('req.session.user_id', req.session.user_id);
  res.render('index', { title: 'Express', user_id : req.session.user_id });
  var user_id = req.session.user_id == undefined ? 'none' : req.session.user_id;
  // res.json({user_id : user_id});
});


router.get('/join', function(req, res) {
  res.render('joinform', { title: '회원가입' });
});

router.post('/join', function(req, res) {
  console.log('req.body', req.body);
  // id, pw, name, tel, sex, email, age, // regday, upday, del_yn
  var id = req.body.id;
  var pw = req.body.pw;
  var name = req.body.name;
  var tel = req.body.t1+req.body.t2+req.body.t3;
  var sex = req.body.sex;
  sex = parseInt(sex, 10);
  var email = req.body.email;
  var age = req.body.age;
  age = parseInt(age, 10);

  pool.getConnection(function(err, conn){
  	if(err) console.error('err', err);
  	conn.query("insert into member(id, pw, name, tel, sex, email, age, regday, upday, del_yn) values(?,?,?,?,?,?,?,now(),now(),'N')", [id, pw, name, tel, sex, email, age], function(err, row){
  			if(err) console.error('err', err);
  			console.log('row', row);
  			if(row.affectedRows==1){
  				//res.json({result:'success'); //모바일경우
  				//res.send('저장성공!!'); //임시로 표시
  				res.redirect('/login'); //가입완료시 로그엔피이지로 이동
  			}else{
  				//res.json({result:'fail'});         //모바일
  				res.send('<script>alert("오류가 발생하여 되돌아갑니다.");history.back();</script>')   //웹페이지
          conn.release();
  			}
		});
	})
});

router.get('/login', function(req, res){
	console.log('req.session', req.session);
	console.log('req.session.id', req.session.id);
	res.render('loginform', {title:'로그인'});
});

router.post('/login', function(req, res){
	var id = req.body.id;
	var pw = req.body.pw;
	pool.getConnection(function(err, conn){
		if(err) console.error('err', err);
		conn.query('select count(*) cnt from member where id = ? and pw = ?', [id, pw], function(err, rows){
			if(err) console.error('err', err);
			console.log('rows', rows);
			var cnt = rows[0].cnt;
			//res.send('aaa');	
			if(cnt==1){
				// res.json({result:'success'});	//모바일
				req.session.user_id = id; // ex) honggildong , session에 user_id에 저장됨 브라우저 꺼질대까지
				//req.session.id <<< 건들지 말것!
				console.log('req.session.user_id', req.session.user_id);
				res.send('<script>alert("정상 로그인 되었습니다.");location.href="/";</script>');   //웹페이지
			}else{
				// res.json({result:'fail'});	//모바일
				res.send('<script>alert("아이디나 비밀번호가 틀려서 되돌아갑니다.");history.back();</script>');   //웹페이지
			}
			
		});
	});
});


router.get('/logout', function(req, res) {
  req.session.destroy(function(err) {
  // cannot access session here
  	if(err) console.error('err', err);
  	res.send('<script>alert("로그아웃되었습니다.");location.href="/";</script>');
  });
});


module.exports = router;
