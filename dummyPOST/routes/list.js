var express = require('express');
var router = express.Router();

/* GE2T users listing. */
router.post('/', function(req, res) {
    res.send('respond with a list');
});

//http://SERVER_IP/list/someplace_info
router.post('/someplace_info', function(req, res) {
    var success = {
        "result": [{
                "SOMEPLACE_ID": "123121",
                "SOMEPLACE_TITLE": "강원도 오션월드",
                "SOMEPLACE_TITLE_DETAIL": "겨울이 더 핫한 물좋은 워터파크",
                "SOMEPLACE_DETAIL": "헌팅명소, 스파설명",
                "SOMEPLACE_PHOTO": " 123121",
                "SOMEPLACE_PHOTO_CNT": "5"
            }, {
                "SOMEPLACE_ID": "414512",
                "SOMEPLACE_TITLE": "전라도 휘닉스파크",
                "SOMEPLACE_TITLE_DETAIL": "여름이 더욱 더 핫한 물좋은 스키장",
                "SOMEPLACE_DETAIL": "내가 헌팅명소다, 스파설명 300미터 암반",
                "SOMEPLACE_PHOTO": " 458215",
                "SOMEPLACE_PHOTO_CNT": "4"
            }, {
                "SOMEPLACE_ID": "225327",
                "SOMEPLACE_TITLE": "제주도 해변",
                "SOMEPLACE_TITLE_DETAIL": "겨울이 더 핫한 물좋은 제주도 해변",
                "SOMEPLACE_DETAIL": "겨울에가면 헌팅명소, 물온도 적당",
                "SOMEPLACE_PHOTO": " 896513",
                "SOMEPLACE_PHOTO_CNT": "5"
            }]
    };
    var fail = {
        "result": "fail"
    }
    res.json(success);
    //res.json(fail)
});

//http://SERVER_IP/list/somenow
router.post('/somenow', function(req, res) {
    var success = {
        "result": [{
            "LIST_PHOTO_ID": "nickname",
            "LIST_ID": "1289",
            "LIST_REMAIN_TIME": "1:30",
            "LIST_USER_ID": "jinsu",
            "LIST_TIME": "20:30",
            "LIST_OPEN_TIME": "30",
            "LIST_NUMBER_PEOPLE": "4",
            "LIST_LAT": "124.12312313",
            "LIST_LNG": "37.12312313",
            "LIST_PIN_CNT": "25",
            "DISTANCE": "400"
        }, {
            "LIST_PHOTO_ID": "dummynickname",
            "LIST_ID": "1581",
            "LIST_REMAIN_TIME": "2:30",
            "LIST_USER_ID": "tak",
            "LIST_TIME": "22:30",
            "LIST_OPEN_TIME": "60",
            "LIST_NUMBER_PEOPLE": "3",
            "LIST_LAT": "24.12312313",
            "LIST_LNG": "137.12312313",
            "LIST_PIN_CNT": "12",
            "DISTANCE": "200"
        }, {
            "LIST_PHOTO_ID": "imdummy",
            "LIST_ID": "2581",
            "LIST_REMAIN_TIME": "1:30",
            "LIST_USER_ID": "jung",
            "LIST_TIME": "20:30",
            "LIST_OPEN_TIME": "60",
            "LIST_NUMBER_PEOPLE": "2",
            "LIST_LAT": "54.12312313",
            "LIST_LNG": "337.12312313",
            "LIST_PIN_CNT": "0",
            "DISTANCE": "1000"
        }]
    };

    var fail = {
        "result": "fail"
    }

    res.json(success);
    //res.json(fail)
});

//http://SERVER_IP/list/my_somenow
router.post('/my_somenow', function(req, res) {
    var success = {
        "result": [{
            "LIST_PHOTO_ID": "nickname",
            "LIST_TIME": "20:30",
            "LIST_NUMBER_PEOPLE": "4",
            "LIST_PIN_CNT": "25",
        }, {
            "LIST_PHOTO_ID": "dummynickname",
            "LIST_TIME": "22:30",
            "LIST_NUMBER_PEOPLE": "3",
            "LIST_PIN_CNT": "12",
        }, {
            "LIST_PHOTO_ID": "imdummy",
            "LIST_TIME": "20:30",
            "LIST_NUMBER_PEOPLE": "2",
            "LIST_PIN_CNT": "0",
        }]
    };

    var fail = {
        "result": "fail"
    }

    res.json(success);
    //res.json(fail)
});

module.exports = router;
