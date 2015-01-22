var express = require('express');
var router = express.Router();


// http://SERVER_IP/heart
router.get('/', function(req, res) {
    var success = {
      "result" : "OK",
      "USER_HEART_CNT" : "5"
    };
    
    var fail = {
        "result" : "fail"
    }
    
    res.json(success);
    //res.json(fail)
});

// http://SERVER_IP/heart/update
router.get('/update', function(req, res) {
    var success = {
      "result" : "OK",
      "USER_HEART_CNT" : "3"    //줄어듬
    };
    
    var fail = {
        "result" : "fail"
    }
    
    res.json(success);
    //res.json(fail)
});

module.exports = router;
