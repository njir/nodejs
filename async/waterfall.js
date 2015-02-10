var async = require('async');

//waterfall은 배열형태만 제공
//series와의 차이점은 앞의 결과가 다음으로 연결된다.
async.waterfall(
    [
        function(callback) {
            console.log('첫번째 처리');
            callback(null, 'one', 'two');
        },
        function(arg1, arg2, callback) {
            if (arg1 == 'one2') {
                callback(true, 'errortak');
            }
                callback(null, '2', '3');
        },
        //arg1에는 'one'이 들어오고 arg2에는 'two'가 들어옴 
        function(arg1, arg2, callback) {
            console.log('두번째 처리');
            callback(null, 'three');
        },
        //arg1 = 'three'
        function(arg1, callback) {
            console.log('세번째 처리');
            callback(null, 'done');
        }
    ],
    function(err, results) {
        if (err) {
            console.log('err: ', err);
            console.log('results: ', results);
        }
        else {

            console.log('최종 처리');
            console.log('results', results);
        }
    }
);
