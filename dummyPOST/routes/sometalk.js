var express = require('express');
var router = express.Router();

//http://SERVER_IP/sometalk
router.post('/', function(req, res) {
    res.send('respond with a sometalk');
});

//http://SERVER_IP/sometalk/list
router.post('/list', function(req, res) {
    var success = {
        "result": [{
            "CHATLIST_ID": "1127",
            "CHATLIST_SEND_ID": "SEND_NICKNAME",
            "CHATLIST_RECV_ID": "RECV_NICKNAME",
            "CHATLIST_LAST_MSG": "",
            "CHATLIST_TIME": "2015/01/22 18:04",
            "CHATLIST_CONNECT": "0"
        }, {
            "CHATLIST_ID": "2427",
            "CHATLIST_SEND_ID": "jinsuNickname",
            "CHATLIST_RECV_ID": "takNickname",
            "CHATLIST_LAST_MSG": "",
            "CHATLIST_TIME": "2015/01/23 05:44",
            "CHATLIST_CONNECT": "0"
        }, {
            "CHATLIST_ID": "5122",
            "CHATLIST_SEND_ID": "NICKNAMER",
            "CHATLIST_RECV_ID": "RECEIVER",
            "CHATLIST_LAST_MSG": "우리는 채팅중입니다.",
            "CHATLIST_TIME": "2015/01/25 23:15",
            "CHATLIST_CONNECT": "0"
        }]
    };
    var fail = {
        "result": "fail"
    }
    res.json(success);
    //res.json(fail)
});

//http://SERVER_IP/sometalk/heart_update
router.post('/heart_update', function(req, res) {
    var success = {
        "result": "OK",
        "USER_HEART_CNT": "3" //줄어듬
    };

    var fail = {
        "result": "fail"
    }

    res.json(success);
    //res.json(fail)
});

//http://SERVER_IP/sometalk/chat
router.post('/chat', function(req, res) {
    var success = {
        "result": [{
            "CHAT_SEND_ID": "SEND_NICKNAME",
            "CHAT_RECV_ID": "RECV_NICKNAME",
            "CHAT_THUMB": "SEND_NICKNAME",
            "CHAR_MESSAGE": "안녕하세요",
            "CHAR_TIME": "2015/01/22 18:04"
        }, {
            "CHAT_SEND_ID": "SEND_NICKNAME",
            "CHAT_RECV_ID": "RECV_NICKNAME",
            "CHAT_THUMB": "SEND_NICKNAME",
            "CHAR_MESSAGE": "네 안녕하세요",
            "CHAR_TIME": "2015/01/22 18:14"
        }, {
            "CHAT_SEND_ID": "SEND_NICKNAME",
            "CHAT_RECV_ID": "RECV_NICKNAME",
            "CHAT_THUMB": "SEND_NICKNAME",
            "CHAR_MESSAGE": "어디게세요?",
            "CHAR_TIME": "2015/01/22 18:24"
        }, {
            "CHAT_SEND_ID": "SEND_NICKNAME",
            "CHAT_RECV_ID": "RECV_NICKNAME",
            "CHAT_THUMB": "SEND_NICKNAME",
            "CHAR_MESSAGE": "저 맞은편 티아카데미에 있어요",
            "CHAR_TIME": "2015/01/22 18:32"
        }, {
            "CHAT_SEND_ID": "SEND_NICKNAME",
            "CHAT_RECV_ID": "RECV_NICKNAME",
            "CHAT_THUMB": "SEND_NICKNAME",
            "CHAR_MESSAGE": "거기로 갈게요",
            "CHAR_TIME": "2015/01/22 18:44"
        }]
    };
    var fail = {
        "result": "fail"
    }
    res.json(success);
    //res.json(fail)
});


//http://SERVER_IP/sometalk/del
router.post('/del', function(req, res) {
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
