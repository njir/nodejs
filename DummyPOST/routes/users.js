var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res) {
    res.send('respond with a users');
});

// http://SERVER_IP/users/regist
router.post('/regist', function(req, res) {
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
router.post('/info', function(req, res) {
    var success = {
        "result": [{
            "USER_PROFIL_PHOTO": "nickname _profil.png",
            "USER_COVER_PHOTO": "nickname _cover.png",
            "USER_HEART_CNT": "5"
        }]
    };
    var fail = {
        "result": "fail"
    };
    res.json(success);
});

// http://SERVER_IP/users/alarm
router.post('/alarm', function(req, res) {
    var success = {
        "USER_COUPON_ID": [{
            "COUPON_ID": "13235",
            "COUPON_NAME": "로즈앤크라운",
            "COUPON_CONTENT": "남녀 동반시 나쵸 증정",
            "COUPON_THUMB": "roseAndCrown"
        }, {
            "COUPON_ID": "43235",
            "COUPON_NAME": "파리바게뜨",
            "COUPON_CONTENT": "남녀 동반시 팔빵 증정",
            "COUPON_THUMB": "paris"
        }, {
            "COUPON_ID": "23235",
            "COUPON_NAME": "스타벅스",
            "COUPON_CONTENT": "남녀 동반시 바나나 증정",
            "COUPON_THUMB": "starbucks"
        }],

        "LIST_REMAIN_TIME": [{
            "LIST_PHOTO_ID": "489494",
            "LIST_TIME": "201501251235"
        }, {
            "LIST_PHOTO_ID": "189494",
            "LIST_TIME": "201501222235"
        }, {
            "LIST_PHOTO_ID": "889494",
            "LIST_TIME": "201611250235"
        }],

        "NOTI_CONTENT": [{
            "NOTI_CONTENT": "2014년 감사합니다.",
            "NOTI_CONTENT": "또또 감사합니다.",
            "NOTI_CONTENT": "하트 많이 사용하세요"
        }]
    };

    var fail = {
        "result": "fail"
    };
    res.json(success);
});


module.exports = router;
