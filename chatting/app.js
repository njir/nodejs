var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require('socket.io').listen(server);
var nicknames = [];


server.listen(8080);

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function(socket) {
    socket.on('new uesr', function(nickname, callback) {
        if (nicknames.indexOf(nickname) != -1) { //있으면
            callback(true);
            socket.nickname = nickname;
            nicknames.push(socket.nickname);
            updateNicknames();
        }
        else {
            callback(false);
        }
    });

    function updateNicknames() {
        io.sockets.emit('usernames', nicknames);
    }
    socket.on('send message', function(msg) {
        io.sockets.emit('new message', {
            msg: msg,
            nick: socket.nickname
        });
    });

    socket.on('disconnect', function(data) {
        if (!socket.nickname) return;
        nicknames.splice(nicknames.indexOf(socket.nickname), 1);
        updateNicknames();
    });
});