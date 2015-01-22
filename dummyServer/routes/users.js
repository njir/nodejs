var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('respond with a users');
});

// http://SERVER_IP/users/regist
router.get('/regist', function(req, res) {
    var success = {
        "result": "OK"
    };
    var fail = {
        "result": "ok",
        "result_msg": "XXX를 채워주세요"
    };
    res.json(success);
    //res.json(fail);
});


// http://SERVER_IP/users/info
router.get('/info', function(req, res) {
    var success = {
        "result": "OK",
        "USER_PROFIL_PHOTO": "nickname _profil.png",
        "USER_COVER_PHOTO": "nickname _cover.png",
        " USER_HEART_CNT": "5"
    };
    var fail = {
        "result": "fail"
    }
    res.json(success);
});

// http://SERVER_IP/users/alarm
router.get('/alarm', function(req, res) {
    var success = {
        "result": [{
            "USER_COUPON_ID" : "13235",
            "LIST_REMAIN_TIME" : "25",
            "LIST_PHOTO_ID" : "489494",
            "NOTI_CONTENT" : "공지사항입니다."
        }]
    };

    var fail = {
        "result": "fail"
    }
    res.json(success);
});


module.exports = router;
