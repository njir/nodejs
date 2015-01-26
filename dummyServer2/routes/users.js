var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
    res.send('GET방식 respond with a users');
});

// http://SERVER_IP/users/regist
router.post('/regist', function(req, res) {
    var userName = req.body.USER_NAME;
    var userPassword = req.body.USER_PASSWORD;
    var userPhone = req.body.USER_PHONE;
    var userFacebook = req.body.USER_FACEBOOK;
    var userKakao = req.body.USER_KAKAO;
    var userNickname = req.body.USER_NICKNAME;
    var userAge = req.body.USER_AGE;
    var userGender = req.body.USER_GENDER;
    console.log(req.body);

    var success = {
        "result": "OK"
    };
    var fail = {
        "result": "OK",
        "result_msg": "request를 채워주세요"
    };
    //카카오, 페이스북은 빼놨음
    if (!userName || !userPassword || !userPhone || !userNickname || !userAge || !userGender) {
        res.json(fail);
    }
    else {
        res.json(success);
    }


});


// http://SERVER_IP/users/info
router.post('/info', function(req, res) {
    var userNickname = req.body.USER_NICKNAME;
    console.log(req.body);

    var success = {
        "result": [{
            "USER_PROFIL_PHOTO": "nickname_profil.png",
            "USER_COVER_PHOTO": "nickname_cover.png",
            "USER_HEART_CNT": "5"
        }]
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

// http://SERVER_IP/users/alarm
router.post('/alarm', function(req, res) {
    var userNickname = req.body.USER_NICKNAME;
    console.log(req.body);

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

        "NOTI_CONTENT": "2014년 감사합니다."
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
