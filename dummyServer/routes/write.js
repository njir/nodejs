var express = require('express');
var router = express.Router();

//http://SERVER_IP/write
router.post('/', function(req, res) {
    var userNickname = req.body.user_nickname;
    var listPhotoID = req.body.list_photo_id;
    var listNumberPeople = req.body.list_number_people;
    var listLAT = req.body.list_lat;
    var listLNG = req.body.list_lng;
    console.log(req.body);

    var success = {
        "result": "OK",
    };
    var fail = {
        "result": "fail"
    };

    if (!userNickname || !listPhotoID || !listNumberPeople || !listLAT || !listLNG) {
        res.json(fail);
    }
    else {
        res.json(success);
    }
});

//http://SERVER_IP/write/update
router.post('/update', function(req, res) {
    var listID = req.body.list_id;
    var listUserID = req.body.list_user_id;
    var listPhotoID = req.body.list_photo_id;
    var listNumberPeople = req.body.list_number_people;
    var listOpentime = req.body.list_open_time;
    var listLAT = req.body.list_lat;
    var listLNG = req.body.list_lng;
    console.log(req.body);

    var success = {
        "result": "OK",
    };
    var fail = {
        "result": "fail"
    };

    if (!listID || !listUserID || !listPhotoID || !listNumberPeople || !listOpentime || !listLAT || !listLNG) {
        res.json(fail);
    }
    else {
        res.json(success);
    }
});

module.exports = router;
