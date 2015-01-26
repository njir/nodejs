var express = require('express');
var router = express.Router();
var db_heart = require('../models/db_heart');


// http://SERVER_IP/heart
router.post('/', function(req, res) {
    var userNickname = req.body.user_nickname;
    console.log(req.body);

    var fail = {
        "result": "fail"
    };

    if (!userNickname) {
        res.json(fail);
    }
    else {
        db_heart.heart(userNickname, function(data) {
            res.json(data);
        });
    }
});

// http://SERVER_IP/heart/update
router.post('/update', function(req, res) {
    var userNickname = req.body.user_nickname;
    console.log(req.body);

    var fail = {
        "result": "fail"
    };

    if (!userNickname) {
        res.json(fail);
    }
    else {
        db_heart.update(userNickname, function(data) {
            res.json(data);
        });
    }
});

module.exports = router;
