var express = require('express');
var router = express.Router();

/* GET users listing. */

// http://SERVER_IP/users/update
router.get('/', function(req, res) {
    var success = {
        "result": [{
            "VERSION_ID": "000001", //(v00.00.01 이라는 의미다)
            "VERSION_ESSENTIAL": "0" //(0: 필수로 업뎃안해도됨, 1: 업뎃해야함)
        }]
    };
    
    var fail = {
        "result" : "fail",
        "result_msg" : "닉네임을 채워주세요"
    };
    
    res.json(success);
    //res.json(fail);
});

module.exports = router;
