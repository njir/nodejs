var express = require('express');
var router = express.Router();
var db_update = require('../models/db_update');

/* GET users listing. */

// http://SERVER_IP/update
router.post('/', function(req, res) {
    var userName = req.body.user_nickname;
    console.log(userName);

    var fail = {
        "result": "fail",
        "result_msg": "닉네임을 채워주세요"
    };

    if (!userName) {
        res.json(fail);
    }
    else {
        db_update.update(userName, function(datas) {
            res.json(datas);
        });
    }
});

module.exports = router;
