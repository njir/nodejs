var express = require('express');
var router = express.Router();

//http://SERVER_IP/notice
router.post('/', function(req, res) {
    var success = {
        "result": [{
            "NOTI_CONTENT": "안녕하세요 썸나우입니다..",
            "NOTI_INSERT_DATETIME": "2015/01/22 18:14"
        }, {
            "NOTI_CONTENT": "긴급 공지! 업데이트 필수",
            "NOTI_INSERT_DATETIME": "2015/02/04 20:48"
        }, {
            "NOTI_CONTENT": "무료 이벤트가 진행 중입니다.",
            "NOTI_INSERT_DATETIME": "2015/11/15 05:50"
        }]

    };
    var fail = {
        "result": "fail"
    }
    res.json(success);
    //res.json(fail)
});

//http://SERVER_IP/notice/report
router.post('/report', function(req, res) {
    var success = {
        "result": "OK",
    };
    var fail = {
        "result": "fail"
    }
    res.json(success);
    //res.json(fail)
});

//http://SERVER_IP/notice/somenow_good
router.post('/somenow_good', function(req, res) {
    var success = {
        "result": "OK",
    };
    var fail = {
        "result": "fail"
    }
    res.json(success);
    //res.json(fail)
});

//http://SERVER_IP/notice/coupon_info
router.post('/coupon_info', function(req, res) {
    var success = {
        "result": [{
            "COUPON_PHOTO": "wangdeabak_1.png",
            "COUPON_THUMB": "wangdeabak.png",
            "COUPON_CONTENT": "싸고 맛남, 헌팅 술집!",
            "COUPON_LAT": "127.1253315",
            "COUPON_LNG": "37.3453315",
            "COUPON_ADDR":"서울 특별시 용산구 이태원동 118-23",
            "COUPON_PHONE":"02-798-2555",
            "COUPON_DETAIL":"남녀 동반시 나쵸&살사 증정",
            "COUPON_NAME":"로즈앤크라운",
            "COUPON_OPERTIME":"평일 15:00-03:00 / 주말 13:00-03:00"
        }, {
            "COUPON_PHOTO": "indio_1.png",
            "COUPON_THUMB": "indioThumb.png",
            "COUPON_CONTENT": "싸고 맛남, 바베큐 헌팅 술집, 맛좋음",
            "COUPON_LAT": "27.5162156",
            "COUPON_LNG": "237.4516585",
            "COUPON_ADDR":"제주도 서귀포시 강남구 서초동 123-45",
            "COUPON_PHONE":"065-215-7895",
            "COUPON_DETAIL":"남녀 동반시 바베큐그릴 무료교환",
            "COUPON_NAME":"흑돼지바베큐",
            "COUPON_OPERTIME":"평일 06:00~22:00 / 휴일 12:00~20:00"
        }]
    };
    var fail = {
        "result": "fail"
    };
    res.json(success);
    //res.json(fail)
});

module.exports = router;
