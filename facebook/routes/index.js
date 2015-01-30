var express = require('express');
var router = express.Router();
var passport = require('passport');
var request = require('request');
var logger = require('../config/logger');

function isLoggedIn(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/');
    } // isLoggedIn

function logout(req, res) {
        request({
                url: 'https://graph.facebook.com/v2.2/me/permissions?access_token=' + req.user.facebookToken,
                method: 'DELETE'
            },
            function(err, response, body) {
                if (err) {
                    console.error('err', err);
                    res.redirect('/profile');
                }
                else {
                    console.log('logout response.statusCode: ', response.statusCode);
                    console.log('logout body: ', body);
                    req.logout();
                    console.log('logout req.user: ', req.user);
                    res.redirect('/');
                }
            });
    } // logout

router.get('/', function(req, res) {
    console.log('/ req.user: ', req.user);
    res.render('index', {
        title: 'Node Authentication'
    });
});

router.get('/auth/facebook', passport.authenticate('facebook', {
    scope: ['email']
}));

router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/profile',
    failureRedirect: '/'
}));

router.get('/profile', isLoggedIn, function(req, res) {
    console.log('/profile req.session', req.session);
    console.log('/profile req.user', req.user);
    res.render('profile', {
        user: req.user
    });
});

router.get('/logout', logout);

module.exports = router;
