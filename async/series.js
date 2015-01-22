var async = require('async');

async.series([
        function(callback) {
            console.log('뭔가 처리 후1');
            callback(null, 'one');
        },
        function(callback) {
            console.log('뭔가 처리 후2');
            callback(null, 'two');
        }
    ],
    function(err, results) {
        console.log('최종 처리 후');
        console.log('results', results);
        //['one', 'two']
    }
);


//async series 객체 형태 예제

async.series({
        one: function(callback) {
            setTimeout(function() {
                console.log('뭔가 처리 후1');
                callback(null, 3);
            }, 2000);
        },
        two: function(callback) {
            setTimeout(function() {
                console.log('뭔가 처리 후2');
                callback(null, 4);
            }, 1000);
        }
    },
    function(err, results) {
        console.log('최종 처리 후');
        console.log('result', results);
    }
);