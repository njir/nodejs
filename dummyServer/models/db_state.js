//2015-01-26 DB연동 테스트
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 150,
    host: '0.0.0.0',
    user: 'njir',
    database: 'dummyDB'
});

// http://SERVER_IP/location/state
// UIv1.5 p14
exports.state = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('STATE getConnection Error : ', err);
        }
        var sql = 'select * from state';
        conn.query(sql, [], function(err, rows) {
            if (err) {
                console.error('STATE Query Error : ', err);
            }
            var datas = {
                "result": rows
            };
            conn.release();
            callback(datas);
        });
    });
};

//http://SERVER_IP/location/state_detail
//UIv1.5 p14
exports.statedetail = function(data, callback) {
    var stateId = data;
    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('STATE_DETAIL getConnection Error : ', err);
        }
        var sql = 'select statedetail_lat, statedetail_lng, statedetail_content from statedetail where state_id=?';
        conn.query(sql, [stateId], function(err, rows) {
            if (err) {
                console.error('STATE_DETAIL Query Error : ', err);
            }
            var datas = {
                "result": rows
            };
            conn.release();
            callback(datas);
        });
    });
};
