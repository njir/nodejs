var express = require('express');
var router = express.Router();

//http://SERVER_IP/write
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

//http://SERVER_IP/write/update
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

module.exports = router;
