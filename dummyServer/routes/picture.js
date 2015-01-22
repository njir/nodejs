var express = require('express');
var router = express.Router();

//http://SERVER_IP/picture
router.get('/', function(req, res) {
    var success = {
        "result": "OK",
    };
    var fail = {
        "result": "fail"
    }
    res.json(success);
    //res.json(fail)
});

//http://SERVER_IP/picture/update
router.get('/update', function(req, res) {
    var success = {
        "result": "OK",
    };
    var fail = {
        "result": "fail"
    }
    res.json(success);
    //res.json(fail)
});

//http://SERVER_IP/picture/somenow
router.get('/somenow', function(req, res) {
    var success = {
        "result": "OK",
    };
    var fail = {
        "result": "fail"
    }
    res.json(success);
    //res.json(fail)
});

//http://SERVER_IP/picture/someplace
router.get('/someplace', function(req, res) {
    var success = {
        "result": "OK",
    };
    var fail = {
        "result": "fail"
    }
    res.json(success);
    //res.json(fail)
});

module.exports = router;
