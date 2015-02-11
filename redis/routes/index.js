var express = require('express');
var router = express.Router();
var async = require('async');
var moment = require('moment');
var redis = require('hiredis');
var client = redis.createClient(6379, "127.0.0.1");

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/ranking', function(req, res) {
    res.render('rankingform', {
        title: 'Redis Ranking'
    });
});

router.post('/ranking', function(req, res) {
    console.log('req.body', req.body);
    var member = req.body.memeber;
    var firstName = req.body.first_name;
    var lastName = req.body.last_name;
    var score = req.body.score;
    var date = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');

    var obj = {
        member: member,
        first_name: firstName,
        last_name: lastName,
        score: score,
        date: date
    };

    client.hset(obj.member, "first_name", obj.first_name, redis.print);
    client.hset(obj.member, "last_name", obj.last_name, redis.print);
    client.hset(obj.member, "score", obj.score, redis.print);
    client.hset(obj.member, "date", obj.date, redis.print);

    client.zadd('MyGame', parseInt(obj.score, 10), obj.member);
    client.zrevrange("MyGame", 0, 4, function(err, members) {
        if (err) console.log('zrevrange err', err);
        console.log('상위 5명의 번호 : ', members);
        var score = [];
        async.each(members, function(item, done) {
            if (err) console.log('async error ', err);
            client.hgetall(item, function(err, doc) {
                if (err) console.log('hgetall error ', err);
                score.push(doc);
                done();
            });
        }, function(err) {
            if (err) console.log('each error ', err);
            res.json({
                results: score
            });

        });

    });
});

module.exports = router;
