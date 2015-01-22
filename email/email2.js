//npm install emailjs
// https://myaccount.google.com/ 
// 보안 수준이 낮은 앱의 액세스 > 허용해야함
var email = require("emailjs/email");

var server = email.server.connect({
    user: 'njirtak@gmail.com',
    password: 'tintree1',
    host: 'smtp.gmail.com',
    ssl: true
});

server.send({
        text: 'I am a boy',
        from: 'Sender <njir@naver.com>',
        to: 'Receiver <njir.naver@daum.net>', // , <...@...>
        //cc: '<ddfsf@ddsf.com>',
        subject: 'attachment test emailjs',
        attachment: [{
            data: '<html>i<i>hope</i> this works!, <a href="http://www.google.com">google</a></html>',//인증 url로
            alternative: true
        }]

    },
    function(err, message) {
        console.log(err || message);
    }
);