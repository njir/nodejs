var express = require('express');
var router = express.Router();

//http://SERVER_IP/picture
router.post('/', function(req, res) {
    var userNickname = req.body.user_nickname;
    console.log(req.body);

    var success = {
        "result": "OK",
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

//http://SERVER_IP/picture/update
router.post('/update', function(req, res) {
    var userNickname = req.body.user_nickname;
    console.log(req.body);
    var success = {
        "result": "OK",
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

//http://SERVER_IP/picture/somenow
router.post('/somenow', function(req, res) {
    var listUserID = req.body.list_user_id;
    console.log(req.body);

    var success = {
        "result": "OK",
    };
    var fail = {
        "result": "fail"
    };
    if (!listUserID) {
        res.json(fail);
    }
    else {
        res.json(success);
    }
});

//http://SERVER_IP/picture/someplace
router.post('/someplace', function(req, res) {
    var someplacePhoto = req.body.someplace_photo;
    console.log(req.body);

    var success = {
        "result": "OK",
    };
    var fail = {
        "result": "fail"
    };

    if (!someplacePhoto) {
        res.json(fail);
    }
    else {
        res.json(success);
    }
});

module.exports = router;
