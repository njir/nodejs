var express = require('express');
var router = express.Router();

//http://SERVER_IP/notice
router.get('/', function(req, res) {
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
router.get('/report', function(req, res) {
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
router.get('/somenow_good', function(req, res) {
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
router.get('/coupon_info', function(req, res) {
    var success = {
        "result": [{
            "COUPON_PHOTO": "wangdeabak_1.png",
            "COUPON_THUMB": "wangdeabak.png",
            "COUPON_CONTENT": "싸고 맛남, 헌팅 술집!",
            "COUPON_PLACE_ID": "건대입구역 3번출구 우회전 70m근방"
        }, {
            "COUPON_PHOTO": "indio_1.png",
            "COUPON_THUMB": "indioThumb.png",
            "COUPON_CONTENT": "싸고 맛남, 헌팅 술집, 물좋음",
            "COUPON_PLACE_ID": "신림역 8번출구 직진 100m근방"
        }]
    };
    var fail = {
        "result": "fail"
    }
    res.json(success);
    //res.json(fail)
});

module.exports = router;
