var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var db_member = require('../models/db_member');

/* GET home page. */
router.get('/', function(req, res) {
    //var user_id = (req.session.user_id === undefined ? 'none' : req.session.user_id);
    //res.json({user_id: user_id}); 모바일일때는
    res.render('index', {
        title: 'Express',
        user_id: req.session.user_id
    });
});

// 회원가입 
router.get('/join', function(req, res) {
    res.render('joinform', {
        title: '회원 가입'
    });
});

router.post('/join', function(req, res) {
    // id, pw, name, tel, sex, email, age, regday, upday, del_yn
    var id = req.body.id;
    var pw = req.body.pw;
    var name = req.body.name;
    var sex = req.body.sex; //넘어오는 모든 값은 string임.
    sex = parseInt(req.body.sex, 10);
    var tel = req.body.t1 + '-' + req.body.t2 + '-' + req.body.t3;
    var age = req.body.age;
    age = parseInt(req.body.age, 10);
    var email = req.body.email;
    var datas = [id, pw, name, tel, sex, email, age];

    db_member.join(datas, function(success) {
        if (success) {
            // res.json({result:'success'}); 모바일일 경우
            res.redirect('/login');
        }
        else {
            // res.json({result:'fail'}); 모바일일 경우
            res.send('<script>alert("오류가 발생해서 되돌아갑니다.");history.back();</script>');
        }

    });
});

// 로그인 
router.get('/login', function(req, res) {
    //console.log('req.session.id', req.session.id);
    res.render('loginform', {
        title: '로그인'
    });
});

router.post('/login', function(req, res) {
    var id = req.body.id;
    var pw = req.body.pw;
    var datas = [id, pw];

    db_member.login(datas, function(cnt) {
        if (cnt === 1) {
            //res.json({result: 'success'}); 모바일일경우
            req.session.user_id = id; //세션은 변수로 존재하고있음. 그냥 사용하면 됨
            res.send('<script>location.href="/";</script>');
        }
        else {
            //res.json({result: 'fail'}); 모바일일경우
            res.send('<script>alert("ID/패스워드를 확인하세요.");history.back();</script>');
        }
    });
});

//  로그아웃
router.get('/logout', function(req, res) {
    req.session.destroy(function(err) {
        if (err) {
            console.error('session destroy error', err);
        }
        res.send('<script>alert("로그아웃되었습니다.");location.href="/";</script>');

    });
});


//업로드
router.get('/upload', function(req, res) {
    res.render('upload/upload', {
        title: '업로드'
    });
});

router.post('/upload', function(req, res) {
    console.log('req.body', req.body);
    console.log('req.files', req.files);
    res.send('/');
});


module.exports = router;
