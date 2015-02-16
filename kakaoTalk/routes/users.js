var express = require('express');
var router = express.Router();

var passport = require('passport'),
    KakaoStrategy = require('passport-kakao').Strategy;
/* GET users listing. */
router.get('/', function(req, res) {
    res.send('respond with a resource');
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

// router.get('/auth/kakao', passport.authenticate('kakao', {
//     failureRedirect: '#!/login'
// }), router.signin);

// router.get('/oauth', passport.authenticate('kakao', {
//     failureRedirect: '#!/login'
// }), router.authCallback);

module.exports = router;
