var express = require('express');
var router = express.Router();
var db_state = require('../models/db_state');

//http://SERVER_IP/location
router.post('/', function(req, res) {
    var userNickname = req.body.user_nickname;
    console.log(req.body);

    var success = {
        "result": [{
            "list_lat": "127.1212",
            "list_lng": "26.1212",
            "user_nickname": userNickname
        }, {
            "list_lat": "327.1213",
            "list_lng": "66.1212",
            "user_nickname": "tak"
        }, {
            "list_lat": "234.1212",
            "list_lng": "134.2212",
            "user_nickname": "min"
        }, {
            "list_lng": "327.2311",
            "list_lat": "326.6312",
            "user_nickname": "junho"
        }, {
            "list_lat": "527.1217",
            "list_lng": "56.3672",
            "user_nickname": "back"
        }, {
            "list_lat": "425.1214",
            "list_lng": "736.2312",
            "user_nickname": "sang"
        }, {
            "list_lat": "117.1212",
            "list_lng": "56.1342",
            "user_nickname": "haha"
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

//http://SERVER_IP/location/state
//UIv1.5 p14
router.post('/state', function(req, res) {
    db_state.state(function(datas) {
        res.json(datas);
    });
});

//http://SERVER_IP/location/state_detail
//UIv1.5 p14
router.post('/state_detail', function(req, res) {
    var stateID = req.body.state_id;
    console.log(req.body);

    var fail = {
        "result": "fail"
    };

    if (!stateID) {
        res.json(fail);
    }
    else {
        db_state.statedetail(stateID, function(datas) {
            res.json(datas);
        });
    }
});

module.exports = router;
