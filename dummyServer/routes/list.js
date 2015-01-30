var express = require('express');
var router = express.Router();
var db_someplace = require('../models/db_someplace');


/* GET users listing. */
router.get('/', function(req, res) {
    res.send('GET방식 respond with a list');
});

//  http://SERVER_IP/list/someplace_list
//  UI문서v1.5 p30
router.post('/someplace_list', function(req, res) {
   // var fail = {"result": "fail"};
    db_someplace.someplaceList(function(datas) {
        res.json(datas);
    });
});

//  http://SERVER_IP/list/someplace_info
//  UI문서v1.5 p31
router.post('/someplace_info', function(req, res) {
    var placeID = req.body.place_id;
    console.log(req.body);
    var fail = {
        "result": "fail"
    };
    if (!placeID) {
        res.json(fail);
    }
    else {
        db_someplace.someplaceInfo(placeID, function(datas) {
            res.json(datas);
        });
    }
});



//http://SERVER_IP/list/somenow
router.post('/somenow', function(req, res) {
    var userNickname = req.body.user_nickname;
    var lat = req.body.lat;
    var lng = req.body.lng;
    console.log(req.body);

    var success = {
        "result": [{
            "list_photo_id": "nickname",
            "list_id": "1289",
            "list_remain_time": "1:30",
            "user_nickname": userNickname,
            "list_time": "20:30",
            "list_open_time": "30",
            "list_number_people": "4",
            "list_lat": lat,
            "list_lng": lng,
            "list_pin_cnt": "25",
            "distance": "400",
            "pincheck": "0",
            "before_time": "5"
        }, {
            "list_photo_id": "dummynickname",
            "list_id": "1581",
            "list_remain_time": "2:30",
            "user_nickname": "tak",
            "list_time": "22:30",
            "list_open_time": "60",
            "list_number_people": "3",
            "list_lat": "24.12312313",
            "list_lng": "137.12312313",
            "list_pin_cnt": "12",
            "distance": "200",
            "pincheck": "1",
            "before_time": "8"
        }, {
            "list_photo_id": "imdummy",
            "list_id": "2581",
            "list_remain_time": "1:30",
            "user_nickname": "jung",
            "list_time": "20:30",
            "list_open_time": "60",
            "list_number_people": "2",
            "list_lat": "54.12312313",
            "list_lng": "337.12312313",
            "list_pin_cnt": "0",
            "distance": "1000",
            "pincheck": "1",
            "before_time": "8"
        }]
    };
    var fail = {
        "result": "fail"
    };

    if (!userNickname || !lat || !lng) {
        res.json(fail);
    }
    else {
        res.json(success);
    }
});

//http://SERVER_IP/list/my_somenow
router.post('/my_somenow', function(req, res) {
    var userNickname = req.body.user_nickname;
    console.log(req.body);

    var success = {
        "result": [{
            "list_photo_id": "nickname",
            "list_time": "20:30",
            "list_number_people": "4",
            "list_pin_cnt": "25",
            "before_time": "5"
        }, {
            "list_photo_id": "dummynickname",
            "list_time": "22:30",
            "list_number_people": "3",
            "list_pin_cnt": "12",
            "before_time": "10"
        }, {
            "list_photo_id": "imdummy",
            "list_time": "20:30",
            "list_number_people": "2",
            "list_pin_cnt": "0",
            "before_time": "20"
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

module.exports = router;
