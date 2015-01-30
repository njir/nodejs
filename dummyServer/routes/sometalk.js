var express = require('express');
var router = express.Router();

//http://SERVER_IP/sometalk
router.get('/', function(req, res) {
    res.send('GET방식 respond with a sometalk');
});

//http://SERVER_IP/sometalk/list
router.post('/list', function(req, res) {
    var userNickname = req.body.user_nickname;
    console.log(req.body);

    var success = {
        "result": [{
            "chatlist_id": "1127",
            "chatlist_send_id": "send_nickname",
            "chatlist_recv_id": "recv_nickname",
            "chatlist_last_msg": "",
            "chatlist_time": "2015/01/22 18:04",
            "chatlist_connect": "0"
        }, {
            "chatlist_id": "2427",
            "chatlist_send_id": "jinsunickname",
            "chatlist_recv_id": "taknickname",
            "chatlist_last_msg": "",
            "chatlist_time": "2015/01/23 05:44",
            "chatlist_connect": "0"
        }, {
            "chatlist_id": "5122",
            "chatlist_send_id": "nicknamer",
            "chatlist_recv_id": "receiver",
            "chatlist_last_msg": "우리는 채팅중입니다.",
            "chatlist_time": "2015/01/25 23:15",
            "chatlist_connect": "0"
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

//http://SERVER_IP/sometalk/heart_update
router.post('/heart_update', function(req, res) {
    var userNickname = req.body.user_nickname;
    var chatlistID = req.body.chatlist_id;
    console.log(req.body);

    var success = {
        "result": "OK",
        "user_heart_cnt": "3" //줄어듬
    };

    var fail = {
        "result": "fail"
    };
    if (!userNickname || !chatlistID) {
        res.json(fail);
    }
    else {
        res.json(success);
    }
});

//http://SERVER_IP/sometalk/chat
router.post('/chat', function(req, res) {
    var chatlistID = req.body.chatlist_id;
    var chatroomSendID = req.body.chatroom_send_id;
    var chatroomRecvID = req.body.chatroom_recv_id;
    var chatroomMSG = req.body.chatroom_msg;

    var success = {
        "result": [{
            "chat_send_id": chatroomRecvID,
            "chat_recv_id": chatroomRecvID,
            "chat_thumb": "SEND_NICKNAME",
            "chat_message": chatroomMSG,
            "chat_time": "2015/01/22 18:04"
        }, {
            "CHAT_SEND_ID": "SEND_NICKNAME",
            "CHAT_RECV_ID": "RECV_NICKNAME",
            "CHAT_THUMB": "SEND_NICKNAME",
            "CHAT_MESSAGE": "네 안녕하세요",
            "CHAT_TIME": "2015/01/22 18:14"
        }, {
            "CHAT_SEND_ID": "SEND_NICKNAME",
            "CHAT_RECV_ID": "RECV_NICKNAME",
            "CHAT_THUMB": "SEND_NICKNAME",
            "CHAT_MESSAGE": "어디게세요?",
            "CHAT_TIME": "2015/01/22 18:24"
        }, {
            "CHAT_SEND_ID": "SEND_NICKNAME",
            "CHAT_RECV_ID": "RECV_NICKNAME",
            "CHAT_THUMB": "SEND_NICKNAME",
            "CHAT_MESSAGE": "저 맞은편 티아카데미에 있어요",
            "CHAT_TIME": "2015/01/22 18:32"
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
    };

    if (!chatlistID || !chatroomSendID || !chatroomRecvID || !chatroomMSG) {
        res.json(fail);
    }
    else {
        res.json(success);
    }
});


//http://SERVER_IP/sometalk/del
router.post('/del', function(req, res) {
    var chatlistID = req.body.chatlist_id;
    var chatlistDel = req.body.chatlist_del;
    console.log(req.body);

    var success = {
        "result": "OK",
    };
    var fail = {
        "result": "fail"
    };
    if (!chatlistID || !chatlistDel) {
        res.json(fail);
    }
    else {
        res.json(success);
    }
});


module.exports = router;
