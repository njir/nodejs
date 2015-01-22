//npm install emailjs
// https://myaccount.google.com/ 
// 보안 수준이 낮은 앱의 액세스 > 허용해야함
var email = require("emailjs/email");

var server = email.server.connect({
    user: 'njirtak@gmail.com',
    password: 'tintree12',
    host: 'smtp.gmail.com',
    ssl: true
});

server.send({
        text: 'I am a boy',
        from: 'Receiver <njir@naver.com>',
        to: 'Sender<njir.naver@daum.net>', // , <...@...>
        //cc: '<ddfsf@ddsf.com>',
        subject: 'test emailjs'
    },
    function(err, message) {
        console.log(err || message);
    }
);