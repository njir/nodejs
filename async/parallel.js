var async = require('async');

async.parallel([
        function(callback) {
            setTimeout(function() {
                callback(null, 'one');
            }, 2000);
        },
        function(callback) {
            setTimeout(function() {
                callback(null, 'two');
            }, 1000);
        }
    ],
    function(err, results) {
        if (err) console.err('err', err);
        console.log('results', results);
    }
);




async.parallel({
    one: function(callback) {
        setTimeout(function() {
            callback(null, 1);
        }, 200);
    },
    two: function(callback) {
        setTimeout(function() {
            callback(null, 2);
        }, 300);
    }
}, function(err, results) {
    if (err) console.error('err', err);
    console.log('results', results);
});
