//2015-01-26 DB연동 테스트
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 150,
    host: '0.0.0.0',
    user: 'njir',
    database: 'dummyDB'
});

// http://SERVER_IP/users/regist
// UIv1.5 p8
exports.regist = function(datas, callback) {
 //   console.log(datas);
    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('REGIST getConnection Error : ', err);
        }
        var sql = "insert into user(user_name, user_password, user_phone, user_facebook, user_kakao, user_nickname, user_age, user_gender) values(?,?,?,?,?,?,?,?)";
        conn.query(sql, datas, function(err, row) {
            if (err) {
                console.error('REGIST Query Error : ', err);
            }
            if (row.affectedRows === 1) {
                var success = {
                    "result": "OK"
                };
            }
            conn.release();
            callback(success);
        });
    });
};

// http://SERVER_IP/users/info
// UIv1.5 p14
exports.info = function(data, callback) {
    var userNickname = data;
    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('INFO getConnection Error : ', err);
        }
        var sql = 'select user_profil_photo, user_cover_photo, user_heart_cnt from user where user_nickname=?';
        conn.query(sql, userNickname, function(err, rows) {
            if (err) {
                console.error('INFO Query Error : ', err);
            }
            var datas = {
                "result" : rows
            };
            conn.release();
            callback(datas);
        });
    });
};