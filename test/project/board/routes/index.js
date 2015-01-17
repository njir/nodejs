var express = require('express');
var router = express.Router();
var db_board = require('../models/db_board');

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/write', function(req, res) { //index.ejs에서 write가 들어오면 펑션실행
    res.render('writeform', {
        title: '글 쓰기'
    }); //writeform.ejs임 ejs생략
});

router.post('/write', function(req, res) {
    console.log('req.body=', req.body);
    var name = req.body.name;
    var pw = req.body.pw;
    var title = req.body.title;
    var content = req.body.content;
    var datas = [pw, name, title, content];

    //success가 돌아옴
    db_board.write(datas, function(success) {
        if (success) {
            //res.json({success: 'ok'});
            res.redirect('/list/1');
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
    if (title === undefined) {
        res.json({
            'err': 'no title'
        });
        return;
    }
    if (content === undefined) {
        res.json({
            'err': 'no content'
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
    db_board.list(page, function(datas) {
        res.render('list', datas);
    });

});

router.get('/read/:num/:page', function(req, res) {
    var num = req.params.num;
    var page = req.params.page;

    db_board.read(num, function(data) {
        res.render('read', {
            title: '글 읽기',
            data: data,
            page: page
        })
    });

});

router.get('/update/:num/:page', function(req, res) {
    var num = req.params.num;
    var page = req.params.page;

    db_board.updateform(num, function(data) {
        res.render('updateform', {
            title: '글 수정',
            data: data,
            page: page
        });
    });
});

router.post('/update', function(req, res) {
    //  console.log('req.body=', req.body);
    var num = req.body.num;
    var pw = req.body.pw;
    var name = req.body.name;
    var title = req.body.title;
    var content = req.body.content;
    var page = req.body.page;
    var datas = [name, title, content, num, pw];

    db_board.update(datas, function(success) {
        if (success) {
            res.redirect('/list/' + page);
        }
        else {
            res.send('<script>alert("비밀번호가 틀립니다.");history.back()</script>');
        }
    });
});

router.post('/delete', function(req, res) {
    console.log('req.body=', req.body);
    var page = req.body.page;
    var num = req.body.num;
    var pw = req.body.pw;
    var datas = [num, pw];

    db_board.delete(datas, function(success) {
        if (success) {
            res.redirect('/list/' + page);
        }
        else {
            res.send('<script>alert("비밀번호가 틀렸습니다.");history.back();</script>');
        }
    });
});

//300개의 글을 쓰자
router.get('/write300', function(req, res) {
    db_board.write300(function(success) {
        res.send('<script>alert("300개의 글 저장 완료");</script>');
    });
});

module.exports = router;