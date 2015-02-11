var express = require('express');
var router = express.Router();
var db = require('../models/db');
require('../models/board_model');
var BoardModel = new db.model('Board'); //항상 db.model을 쓸것


/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/write', function(req, res) {
    res.render('write_form', {
        title: 'Board'
    });
});

router.post('/write', function(req, res) {
    console.log(req.body);
    // name, title, content, pw, hit, regdate
    var name = req.body.name;
    var title = req.body.title;
    var content = req.body.content;
    var pw = req.body.pw;
    var board = new BoardModel({
        name: name,
        title: title,
        content: content,
        pw: pw
    });

    board.save(function(err, doc) {
        if (err) console.error('err', err);
        console.log('doc', doc);
        res.redirect('/list');
    });
});

router.get('list', function(req, res) {
    BoardModel.find({}, function(err, docs) {
        if (err) console.error('err', err);
        console.log('docs', docs);
        res.json({
            docs: docs
        });
    });

});

module.exports = router;
