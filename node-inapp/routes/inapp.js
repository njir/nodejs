var express = require('express');
var router = express.Router();


// inapp 
var IABVerifier = require('iab_verifier');
var googleplay_public_key = "AIzaSyA2UBTR8Z13MOWUZhv-e4tLkSrPc-WwMRM"; //https://console.developers.google.com/project/tak-gcm-demo/apiui/credential > 서버 어플리케이션 api키
var googleplayVerifier = new IABVerifier(googleplay_public_key);

var receiptData = {
    "orderId": "12999763169054705758.1371079406387615",
    "packageName": "com.example.app",
    "productId": "exampleSku",
    "purchaseTime": 1345678900000,
    "purchaseState": 0,
    "developerPayload": "bGoa+V7g/yqDXvKRqq+JTFn4uQZbPiQJo4pf9RzJ",
    "purchaseToken": "rojeslcdyyiapnqcynkjyyjh"
};

var receiptSignature = 'NJEnsH4UGpx/51Tg1NP/yX1rHSwGcL6kXkw+Yy9fTdsIDePWxCWLslXwPPoF7FlxxLHKVBuCgpNg2fCO7DkC72hT55gOXsFiqcwaJEgusSh1DAGHZD5sNSUuw53UxM6/jGxwqRYgYejbOhfvhuJ6AEQYQR74WefujG5RWd7tuDs=';

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



router.post('/receipt', function(req, res) {
    var receipt = JSON.parse(req.rawBody);
    var isValid = googleplayVerifier.verifyReceipt(receiptData, receiptSignature);
    if (isValid) {
        res.status(200);
        res.end();
    }
    else {
        res.status(401);
        res.end();
    }
});





router.get('/', function(req, res) {
    res.send('Service running');
    res.end();
});




module.exports = router;
