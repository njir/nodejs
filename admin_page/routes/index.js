var express = require('express');
var router = express.Router();
var db_member = require('../models/db_member');


/* get home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: '관리자 페이지'
    });
});

router.get('/join', function(req, res) {
    res.render('join', {
        title: '회원가입'
    });
});

router.post('/join', function(req, res) {
    //console.log('req.body=', req.body);
    var name = req.body.name;
    var id = req.body.id;
    var pw = req.body.pw;
    var sex = req.body.sex; //male, female
    var email = req.body.email;
    var age = req.body.age;
    var tel = req.body.t1 + req.body.t2 + req.body.t3
    var datas = [id, pw, name, email, sex, age, tel];

    db_member.join(datas, function(success) {
        if (success) {
            res.redirect('/');
        }
        else {
            res.json({
                success: 'fail'
            });
        }
    });
    if (name === undefined) {
        res.json({
            'err': 'no name'
        });
        return;
    }
    if (pw === undefined) {
        res.json({
            'err': 'no pw'
        });
        return;
    }
    if (id === undefined) {
        res.json({
            'err': 'no id'
        });
        return;
    }
    if (sex === undefined) {
        res.json({
            'err': 'no email'
        });
        return;
    }
    if (age === undefined) {
        res.json({
            'err': 'no age'
        });
        return;
    }
    if (tel === undefined) {
        res.json({
            'err': 'no tel'
        });
        return;
    }
});


router.get('/list', function(req, res) {
    res.redirect('/list/1');
});


router.get('/list/:page', function(req, res) {
    var page = req.params.page;
    page = parseInt(page, 10);

    //function(datas)가 돌아오는 값임 list함수에서 callback(datas) 이 정보
    db_member.list(page, function(datas) {
        res.render('list', datas);
    });

});

router.get('/read/:num/:page', function(req, res) {
    var num = req.params.num;
    var page = req.params.page;

    db_member.read(num, function(data) {
        res.render('read', {
            title: '회원 정보',
            data: data,
            page: page
        })
    });

});

router.get('/update/:num/:page', function(req, res) {
    var num = req.params.num;
    var page = req.params.page;

    db_member.updateform(num, function(data) {
        res.render('updateform', {
            title: '회원정보 수정',
            data: data,
            page: page
        });
    });
});

router.post('/update', function(req, res) {
    console.log('req.body=', req.body);
    var num = req.body.num;
    var email = req.body.email;
    var pw = req.body.pw;
    var name = req.body.name;
    var sex = req.body.sex;
    var phone = req.body.phone;
    var age = req.body.age;
    var page = req.body.page;
    var datas = [pw, name, email, sex, phone, age, num];

    db_member.update(datas, function(success) {
        if (success) {
            res.redirect('/list/' + page);
        }
        else {
            res.send('<script>alert("비밀번호가 틀립니다.");history.back()</script>');
        }
    });
});


router.get('/withdrawal', function(req, res) {
    res.render('withdrawal', {
        title: '회원 탈퇴'
    });
});

router.post('/withdrawal', function(req, res) {
    var id = req.body.id;
    var pw = req.body.pw;
    var datas = [id, pw];

    db_member.withdrawal(datas, function(success) {
        if (success) {
            res.redirect('/');
        }
        else {
            res.send('<script>alert("비밀번호가 틀립니다.");history.back()</script>');
        }
    });
});


router.get('/login', function(req, res) {
    res.render('login', {
        title: 'login'
    });
});

router.post('/login', function(req, res) {
    var id = req.body.id;
    var pw = req.body.pw;
    var datas = [id, pw];

    db_member.login(datas, function(data) {
        if (data.id === req.body.id) {
            res.redirect('/');
        }
        else {
            res.send('<script>alert("비밀번호가 틀립니다.");history.back()</script>');
        }
    })
});


router.get('/join100', function(req, res) {
    db_member.join100(function(success){
        res.send('<scrip>alert("100개 아이디 저장완료");</script>');
    });
});

module.exports = router;
