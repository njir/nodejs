var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Hello World');
});

app.get('/aaa', function(request, response) {
    var data = {
        "result": "success"
    };
    response.json(data);
});

var server = app.listen(8080, function() {
    var host = '$IP'; //'nodejs-njir-1.c9.io', 172.17.73.150
    //var port = server.address().port; //8080
    var port = '$PORT'; //8080

    console.log('Example app listening at http://%s:%s', host, port);
});