var express = require('express');
var router = express.Router();

//http://SERVER_IP/write
router.post('/', function(req, res) {
    var userNickname = req.body.USER_NICKNAME;
    var listPhotoID = req.body.LIST_PHOTO_ID;
    var listNumberPeople = req.body.LIST_NUMBER_PEOPLE;
    var listLAT = req.body.LIST_LAT;
    var listLNG = req.body.LIST_LNG;
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
    var listID = req.body.LIST_ID;
    var listUserID = req.body.LIST_USER_ID;
    var listPhotoID = req.body.LIST_PHOTO_ID;
    var listNumberPeople = req.body.LIST_NUMBER_PEOPLE;
    var listOpentime = req.body.LIST_OPEN_TIME;
    var listLAT = req.body.LIST_LAT;
    var listLNG = req.body.LIST_LNG;
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
