var express = require('express');
var app = express();
var IABVerifier = require('iab_verifier');
//var bodyParser = require('body-parser');

var googleplay_public_key = "-- YOUR PUBLIC KEY --";
var googleplayVerifier = new IABVerifier(googleplay_public_key);
var rawBody = function rawBody(req, res, next) {
    req.setEncoding('utf8');
    req.rawBody = '';
    req.on('data', function(chunk) {
        req.rawBody += chunk;
    });
    req.on('end', function() {
        next();
    });
};
app.use(rawBody);
app.get('/', function(req, res) {
    res.send('Service running!');
    res.end();
});

app.post('/receipt', function(req, res) {
    var receipt = JSON.parse(rawBody(req));
    var sig = req.body.signature;
    var isValid = googleplayVerifier.verifyReceipt(receipt, sig);
    if (isValid) {
        res.status(200);
        res.end();
    }
    else {
        res.status(401)
        res.end()
    }
});
var server = app.listen(process.env.PORT || 8080, function() {
    console.log('Listening on port %d', server.address().port);
});