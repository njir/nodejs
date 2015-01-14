var express = require('express');
var router = express.Router();
var db_member = require('../models/db_member');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/join', function(req, res) {
    res.render('join', {
        title: '회원가입'
    });
});

router.post('/join', function(req, res) {
    console.log('req.body=', req.body);
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
});

module.exports = router;
