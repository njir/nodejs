var express = require('express');
var router = express.Router();
var pool = require("../config/db");
var async = require("async");

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', {
        title: 'Express'
    });
});

//  /nodate : 에러 나는 경우 테스트
// async.each 사용
//  /ok2: 직접 조립하는 경우

router.get('/nodata', function(req, res) {
    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('err', err);
        }
        var sql = 'SELECT DISTINCT(note) FROM async1';
        conn.query(sql, [], function(err, rows) {
            if (err) console.log('err', err);
            console.log('rows', rows);
            var arr = [];

            // for (var i = 0; i < rows.length; i++) {
            //     var sql2 = 'SELECT word FROM async1 WHERE note=?';
            //     conn.query(sql2, [rows[i].note], function(err, rows2) {
            //         if (err) console.log('err', err);
            //         console.log('rows2', rows2);
            //         arr[i] = rows2;
            //     });
            // } // for

            async.each(rows, function(row, callback) {
                //어떤 함수 내가 할함수
                console.log('배열 : ', row);
                var sql2 = 'SELECT word FROM async1 WHERE note=?';
                conn.query(sql2, [row.note], function(err, rows2) {
                    if (err) console.log('err', err);
                    console.log('rows2', rows2);
                });
                callback();

            }, function(err) {
                if (err) {
                    console.log('err', err);
                }
                //내가 할 함수



                console.log('모두 성공');

            });

            console.log('arr', arr);
            conn.release();
            res.json({
                "result": arr
            });

        });
    });
});

var arr = [1, 2, 3];
async.each(arr, function(item, callback) {
    //어떤 함수 내가 할함수
    console.log('배열 : ', item);

    callback();
}, function(err) {
    if (err) {
        console.log('err', err);
    }
    //내가 할 함수
    console.log('모두 성공');

});


router.get('/ok2', function(req, res) {
    pool.getConnection(function(err, conn) {
        if (err) console.log('err', err);
        conn.query('SELECT note, word FROM async1 ORDER BY note', [], function(err, rows) {
            if (err) console.log('err', err);
            console.log('rows ', rows);

            var arr = [];
            var curr = '';
            var prev = '';
            var len = rows.length;
            var words = [];

            for (var i = 0, j = 0; i < len; i++) {
                curr = rows[i].note;
                console.log('curr', curr);
                if (curr != prev) {
                    console.log(curr + ':' + rows[i].word);
                    prev = curr;
                    words = [];
                    arr[j] = {
                        'note': curr,
                        'words': words
                    };
                    words.push(rows[i].word);
                    j++;
                }
                else {
                    console.log(curr + ':' + rows[i].word);
                    words.push(rows[i].word);
                }
            }
            res.json({
                'arr': arr
            });
        });
    });

});



module.exports = router;
