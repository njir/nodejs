var express = require('express');
var router = express.Router();
var passport = require('passport'),
    KakaoStrategy = require('passport-kakao').Strategy;

var accessToken = "6cFMXeHCU8kUPPIv_m4MNfzlKgVf-TXUzCq0d6wQQjQAAAFLe32lzQ"
var refreshToken = "-dv1FTa_3W0uDvBYCewjLdk9hfk7FMxFC8vwn6wQQjQAAAFLe32lzA"

var async = require("async");


passport.use(new KakaoStrategy({
        clientID: '947fa7d3f3bc96d69f493a7761bcc7e0',
        callbackURL: 'localhost/oauth'
    },
    function(accessToken, refreshToken, profile, done) {
        console.log(profile);
        done(null, profile);
    }
));

/* GET home page. */
router.get('/', function(req, res) {
    console.log(accessToken);
    async.waterfall(
        [
            function(callback) {
                passport.use(new KakaoStrategy({
                        clientID: '947fa7d3f3bc96d69f493a7761bcc7e0',
                        callbackURL: 'localhost/oauth'
                    },
                    function(accessToken, refreshToken, profile, done) {
                        console.log(profile);
                        done(null, profile);
                        callback(null, profile);
                    }
                ));
            }
        ],
        function(err, results) {
            if (err) {
                console.log(err);
            }
            console.log(results);
        }
    )

    res.render('index', {
        title: 'Express'
    });
});


router.post('/kakao', function(req, res){
    
    
    
    
});





router.get('/auth/kakao', function(req, res) {
    console.log(req.body);
    passport.authenticate('kakao', function(done) {
        res.json(done);
    });
});

router.get('/auth/kakao', function(req, res) {
    console.log(req.body);
    passport.authenticate('kakao', function(done) {
        res.json(done);
    });
});



module.exports = router;
