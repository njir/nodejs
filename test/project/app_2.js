var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello World');
});

app.get('/aaa', function(request, response){
    var data = {
        "result":"success"
    };
    response.json(data);
});

var server = app.listen(8080, function(){
    var host = 'nodejs-njir-1.c9.io'; //cloud9 내서버 주소
    var port = server.address().port;
    
    console.log('Example app listening at http://%s:%s', host, port);
});