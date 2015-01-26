var express = require('express');
var router = express.Router();
var db_users = require('../models/db_users');

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('GET방식 respond with a users');
});

// http://SERVER_IP/users/regist
// UIv1.5 p8
router.post('/regist', function(req, res) {
    var userName = req.body.user_name;
    var userPassword = req.body.user_password;
    var userPhone = req.body.user_phone;
    var userFacebook = req.body.user_facebook;
    var userKakao = req.body.user_kakao;
    var userNickname = req.body.user_nickname;
    var userAge = req.body.user_age;
    var userGender = req.body.user_gender;
    var datas = [userName, userPassword, userPhone, userFacebook, userKakao, userNickname, userAge, userGender];

    console.log(req.body);

    var fail = {
        "result": "OK",
        "result_msg": "request를 채워주세요"
    };

    if (!userName || !userPassword || !userPhone || !userNickname || !userAge || !userGender) {
        res.json(fail);
    }
    else {
        db_users.regist(datas, function(success) {
            res.json(success);
        });
    }
});


// http://SERVER_IP/users/info
// UIv1.5 p14
router.post('/info', function(req, res) {
    var userNickname = req.body.user_nickname;
    console.log(req.body);
    var fail = {
        "result": "fail"
    };

    if (!userNickname) {
        res.json(fail);
    }
    else {
        db_users.info(userNickname, function(datas) {
            res.json(datas);
        });
    }
});

// http://SERVER_IP/users/alarm
router.post('/alarm', function(req, res) {
    var userNickname = req.body.user_nickname;
    console.log(req.body);

    var success = {
        "user_coupon_id": [{
            "coupon_id": "13235",
            "coupon_name": "로즈앤크라운",
            "coupon_content": "남녀 동반시 나쵸 증정",
            "coupon_thumb": "roseandcrown"
        }, {
            "coupon_id": "43235",
            "coupon_name": "파리바게뜨",
            "coupon_content": "남녀 동반시 팔빵 증정",
            "coupon_thumb": "paris"
        }, {
            "coupon_id": "23235",
            "coupon_name": "스타벅스",
            "coupon_content": "남녀 동반시 바나나 증정",
            "coupon_thumb": "starbucks"
        }],

        "list_remain_time": [{
            "list_photo_id": "489494",
            "list_time": "201501251235"
        }, {
            "list_photo_id": "189494",
            "list_time": "201501222235"
        }, {
            "list_photo_id": "889494",
            "list_time": "201611250235"
        }],

        "noti_content": "2014년 감사합니다."
            /*
            "NOTI_CONTENT": [{
                "NOTI_CONTENT": "2014년 감사합니다.",
                "NOTI_CONTENT": "또또 감사합니다.",
                "NOTI_CONTENT": "하트 많이 사용하세요"
            }]
            */
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
