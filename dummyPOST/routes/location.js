var express = require('express');
var router = express.Router();

//http://SERVER_IP/location
router.post('/', function(req, res) {
    var success = {
        "result": [{
            "PLACE_LAT": "127.1212",
            "PLACE_LNG": "26.1212",
            "PlACE_USER_ID": "JINSU"
        }, {
            "PLACE_LAT": "327.1213",
            "PLACE_LNG": "66.1212",
            "PlACE_USER_ID": "TAK"
        }, {
            "PLACE_LAT": "234.1212",
            "PLACE_LNG": "134.2212",
            "PlACE_USER_ID": "MIN"
        }, {
            "PLACE_LAT": "327.2311",
            "PLACE_LNG": "326.6312",
            "PlACE_USER_ID": "JUNHO"
        }, {
            "PLACE_LAT": "527.1217",
            "PLACE_LNG": "56.3672",
            "PlACE_USER_ID": "BACK"
        }, {
            "PLACE_LAT": "425.1214",
            "PLACE_LNG": "736.2312",
            "PlACE_USER_ID": "SANG"
        }, {
            "PLACE_LAT": "117.1212",
            "PLACE_LNG": "56.1342",
            "PlACE_USER_ID": "HAHA"
        }]
    };
    var fail = {
        "result": "fail"
    }
    res.json(success);
    //res.json(fail)
});

//http://SERVER_IP/location/state
router.post('/state', function(req, res) {
    var success = {
        "result": [{
            "STATE_ID": "02",
            "STATE_LAT": "127.1545",
            "STATE_LNG": "36.5112",
            "STATE_CONTENT": "서울"
        }, {
            "STATE_ID": "031",
            "STATE_LAT": "227.2152",
            "STATE_LNG": "136.1215",
            "STATE_CONTENT": "경기도"
        }, {
            "STATE_ID": "633",
            "STATE_LAT": "27.1284",
            "STATE_LNG": "436.1251",
            "STATE_CONTENT": "전라도"
        }, {
            "STATE_ID": "045",
            "STATE_LAT": "227.1235",
            "STATE_LNG": "306.5166",
            "STATE_CONTENT": "경상도"
        }, {
            "STATE_ID": "069",
            "STATE_LAT": "27.5615",
            "STATE_LNG": "236.8212",
            "STATE_CONTENT": "제주도"
        }]
    };
    var fail = {
        "result": "fail"
    }
    res.json(success);
    //res.json(fail)
});

//http://SERVER_IP/location/state_detail
router.post('/state_detail', function(req, res) {
   var success = {
        "result": [{
            "STATE_LAT": "127.1545",
            "STATE_LNG": "36.5112",
            "STATEDETAIL_CONTENT": "홍대"
        }, {
            "STATE_LAT": "227.2152",
            "STATE_LNG": "136.1215",
            "STATEDETAIL_CONTENT": "건대"
        }, {
            "STATE_LAT": "27.1284",
            "STATE_LNG": "436.1251",
            "STATEDETAIL_CONTENT": "강남"
        }, {
            "STATE_LAT": "227.1235",
            "STATE_LNG": "306.5166",
            "STATEDETAIL_CONTENT": "신림"
        }, {
            "STATE_LAT": "27.5615",
            "STATE_LNG": "236.8212",
            "STATEDETAIL_CONTENT": "신도림"
        }]
    };
    var fail = {
        "result": "fail"
    }
    res.json(success);
    //res.json(fail)
});

module.exports = router;
