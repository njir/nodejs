var express = require('express');
var router = express.Router();
var db_notice = require('../models/db_notice');

//http://SERVER_IP/notice
// UIv1.5 p17
router.post('/', function(req, res) {
    var userNickname = req.body.user_nickname;
    //console.log(req.body);
    var fail = {
        "result": "fail"
    }
    if (!userNickname) {
        res.json(fail);
    }
    else {
        db_notice.notice(function(datas) {
            res.json(datas);
        });
    }
});

//http://SERVER_IP/notice/report
router.post('/report', function(req, res) {
    var listID = req.body.list_id;
    console.log(req.body);

    var success = {
        "result": "OK",
    };
    var fail = {
        "result": "fail"
    }
    if (!listID) {
        res.json(fail);
    }
    else {
        res.json(success);
    }
});

//http://SERVER_IP/notice/somenow_good
router.post('/somenow_good', function(req, res) {
    var pinFromUserID = req.body.pin_from_user_id;
    var pinToUserID = req.body.pin_to_user_id;
    var listID = req.body.list_id;

    console.log(req.body);


    var success = {
        "result": "OK",
    };
    var fail = {
        "result": "fail"
    }
    if (!pinFromUserID || !pinToUserID || !listID) {
        res.json(fail);
    }
    else {
        res.json(success);
    }
});

//http://SERVER_IP/notice/coupon_info
router.post('/coupon_info', function(req, res) {
    var couponID = req.body.coupon_id;
    console.log(req.body);

    var success = {
        "result": [{
            "coupon_photo": "wangdeabak_1.png",
            "coupon_thumb": "wangdeabak.png",
            "coupon_content": "싸고 맛남, 헌팅 술집!",
            "coupon_lat": "127.1253315",
            "coupon_lng": "37.3453315",
            "coupon_addr": "서울 특별시 용산구 이태원동 118-23",
            "coupon_phone": "02-798-2555",
            "coupon_detail": "남녀 동반시 나쵸&살사 증정",
            "coupon_name": "로즈앤크라운",
            "coupon_opertime": "평일 15:00-03:00 / 주말 13:00-03:00"
        }, {
            "coupon_photo": "indio_1.png",
            "coupon_thumb": "indiothumb.png",
            "coupon_content": "싸고 맛남, 바베큐 헌팅 술집, 맛좋음",
            "coupon_lat": "27.5162156",
            "coupon_lng": "237.4516585",
            "coupon_addr": "제주도 서귀포시 강남구 서초동 123-45",
            "coupon_phone": "065-215-7895",
            "coupon_detail": "남녀 동반시 바베큐그릴 무료교환",
            "coupon_name": "흑돼지바베큐",
            "coupon_opertime": "평일 06:00~22:00 / 휴일 12:00~20:00"
        }]
    };
    var fail = {
        "result": "fail"
    };
    if (!couponID) {
        res.json(fail);
    }
    else {
        res.json(success);
    }
});

module.exports = router;
