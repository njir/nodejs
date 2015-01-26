var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 150,
    host: '0.0.0.0',
    user: 'njir',
    database: 'dummyDB'
});

// http://SERVER_IP/heart
exports.heart = function(data, callback) {
    var userNickname = data;

    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('HEART getConnection Error : ', err);
        }
        var sql = 'select user_heart_cnt from user where user_nickname=?';
        conn.query(sql, userNickname, function(err, rows) {
            if (err) {
                console.error('HEART Query Error : ', err);
            }
            var datas = {
                "result": rows
            };
            console.log(rows);
            conn.release();
            callback(datas);
        });
    });
};

// http://SERVER_IP/heart/update
exports.update = function(data, callback) {
    var userNickname = data;
    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('HEART_UPDATE getConnection Error : ', err);
        }
        var sql = 'select user_heart_cnt from user where user_nickname=?';
        conn.query(sql, userNickname, function(err, rows) {
            if (err) {
                console.error('HEART_UPDATE Query Error : ', err);
            }
            var datas = {
                "result": rows
            };
            console.log(rows);
            conn.release();
            callback(datas);
        });
    });
};
