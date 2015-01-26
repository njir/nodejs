var express = require('express');
var router = express.Router();


// http://SERVER_IP/heart
router.post('/', function(req, res) {
    var userNickname = req.body.USER_NICKNAME;
    console.log(req.body);

    var success = {
        "result": "OK",
        "USER_HEART_CNT": "5"
    };
    var fail = {
        "result": "fail"
    };

    if (!userNickname) {
        res.json(fail);
    }
    else {
        res.json(success);
    }
});

// http://SERVER_IP/heart/update
router.post('/update', function(req, res) {
    var userNickname = req.body.USER_NICKNAME;
    console.log(req.body);

    var success = {
        "result": "OK",
        "USER_HEART_CNT": "3" //줄어듬
    };
    var fail = {
        "result": "fail"
    };

    if (!userNickname) {
        res.json(fail);
    }
    else {
        res.json(success);
    }
});

module.exports = router;
