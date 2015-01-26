var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('respond with a guest');
});

router.get('/list', function(req, res) {
    var datas = {
        "item": [{
            "title": "세번째 포스트",
            "date": "2013-02-14 15:06:52",
            "postId": "4"
        }, {
            "title": "두번째 포스트",
            "date": "2013-02-14 15:06:52",
            "postId": "3"
        }, {
            "title": "첫번째 포스트",
            "date": "2013-02-14 15:06:52",
            "postId": "2"
        }]
    };
    res.json(datas);
});

router.get('/read/:postId', function(req, res) {
    var postId = req.params.postId;
    console.log(postId);
    var url = 'https://apis.daum.net/blog/post/read.do?blogName=androidsam&postId=4&output=json&callback=?'
    var datas = {
        'title': postId + '번째 포스트',
        'content': postId + '번째 포스트 내용입니다'
    }
    res.json(datas);
});

router.post('/test', function(req, res) {
    return res.json({
        'title': 'test'
    })
});

/*
var request = require('request');

request.post(
    'http://www.yoursite.com/formpage',
    { form: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

*/



module.exports = router;
