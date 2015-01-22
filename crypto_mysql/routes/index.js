var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var crypto = require("crypto");

var pool = mysql.createPool({
    connectionLimit: 150,
    host: '0.0.0.0',
    user: 'njir',
    database: 'test'
});

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Express'
    });
});

router.post('/join', function(req, res) {
    var id = req.body.id;
    var pw = req.body.pw;
    var name = req.body.name;
    var salt = Math.round((new Date().valueOf() * Math.random())) + ''; //string화
    var crypt_pass = crypto.createHash('sha512').update(pw + salt).digest('hex');

    pool.getConnection(function(err, conn) {
        if (err) console.error('err', err);
        var sql = 'insert into user(id, pw, name, salt) values(?,?,?,?)';
        var data = [id, crypt_pass, name, salt];
        conn.query(sql, data, function(err, row) {
            if (err) console.error('err', err);

            if (row.affectedRows == 1) {
                res.json({
                    result: 'ok'
                });
            }
            else {
                res.json({
                    result: 'fail'
                });
            }
        });
    });
});


router.get('/login', function(req, res) {
    res.render('loginform', {
        title: '로그인'
    });
});

router.post('/login', function(req, res) {
    var id = req.body.id;
    var pw = req.body.pw;

    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('err', err);
        }

        var sql = 'select id, pw, name, salt from user where id=?';
        var data = [id];

        conn.query(sql, data, function(err, rows) {
            if (err) {
                console.error('err', err);
            }
            
            var db_pass = rows[0].pw;
            var salt = rows[0].salt;
            var crypt_pass = crypto.createHash('sha512').update(pw + salt).digest('hex');
            if (crypt_pass == db_pass) {
                console.log('비밀번호 일치');
                res.json({
                    result: 'success'
                });
            }
            else {
                console.log('비밀번호 불일치');
                res.json({
                    result: 'fail'
                });

            }
        });

    });
});


module.exports = router;
