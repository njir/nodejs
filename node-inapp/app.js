var express = require('express');
var app = express();
var IABVerifier = require('iab_verifier');
var bodyParser = require('body-parser');

var googleplay_public_key = "AIzaSyA2UBTR8Z13MOWUZhv-e4tLkSrPc-WwMRM";
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
    res.end()
});
var receipt2 = {
    "orderId": "12999763169054705758.1371079406387615",
    "packageName": "com.example.app",
    "productId": "exampleSku",
    "purchaseTime": 1345678900000,
    "purchaseState": 0,
    "developerPayload": "bGoa+V7g/yqDXvKRqq+JTFn4uQZbPiQJo4pf9RzJ",
    "purchaseToken": "rojeslcdyyiapnqcynkjyyjh"
};

app.post('/receipt', function(req, res) {
    var receipt = JSON.parse(req.rawBody);
    //var receipt = JSON.parse(receipt2);
    var isValid = googleplayVerifier.verifyReceipt(receipt.Json.originalJson, receipt.Json.signature);
    if (isValid) {
        res.status(200)
        res.end()
    }
    else {
        res.status(401)
        res.end()
    }
});
app.set('port', process.env.PORT || 3000); 

var server = app.listen(app.get('port'), function() {
    console.log('관리자 서버가 ' + app.get('port') + '에서 실행 중입니다.');

});

module.exports = app;


// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');



// var routes = require('./routes/index');
// var users = require('./routes/users');

// // add inapp
// var inapp =require('./routes/inapp');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// // uncomment after placing your favicon in /public
// //app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', routes);
// app.use('/users', users);
// // add inapp
// app.use('/inapp', inapp);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });

// // error handlers

// // development error handler
// // will print stacktrace
// if (app.get('env') === 'development') {
//     app.use(function(err, req, res, next) {
//         res.status(err.status || 500);
//         res.render('error', {
//             message: err.message,
//             error: err
//         });
//     });
// }

// // production error handler
// // no stacktraces leaked to user
// app.use(function(err, req, res, next) {
//     res.status(err.status || 500);
//     res.render('error', {
//         message: err.message,
//         error: {}
//     });
// });

// app.set('port', process.env.PORT || 3000); 

// var server = app.listen(app.get('port'), function() {
//     console.log('관리자 서버가 ' + app.get('port') + '에서 실행 중입니다.');

// });


// module.exports = app;
