var express = require('express');
var router = express.Router();

/* GET users listing. */

// http://SERVER_IP/update
router.post('/', function(req, res) {
    var userName = req.body.USER_NAME;
    console.log(userName);
    var success = {
        "result": [{
            "VERSION_ID": "000001", //(v00.00.01 이라는 의미다)
            "VERSION_ESSENTIAL": "0" //(0: 필수로 업뎃안해도됨, 1: 업뎃해야함)
        }]
    };
    var fail = {
        "result": "fail",
        "result_msg": "닉네임을 채워주세요"
    };

    if (!userName) {
        res.json(fail);
    }
    else {
        res.json(success);
    }
});

module.exports = router;
