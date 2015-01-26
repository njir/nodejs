//2015-01-26 DB연동 테스트
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 150,
    host: '0.0.0.0',
    user: 'njir',
    database: 'dummyDB'
});

//  http://SERVER_IP/list/someplace_list
//  UI문서v1.5 p30
exports.someplaceList = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('SOMEPLACE_LIST getConnection Error : ', err);
        }
        var sql = 'select someplace_id, someplace_title, someplace_title_detail from someplace';
        conn.query(sql, [], function(err, rows) {
            if (err) {
                console.error('SOMEPLACE_LIST Query Error : ', err);
            }
            var datas = {
                "result": rows
            };
            conn.release();
            callback(datas);
        });
    });
};

//  http://SERVER_IP/list/someplace_info
//  UI문서v1.5 p31
exports.someplaceInfo = function(data, callback) {
    var placeID = data;
    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('SOMEPLACE_INFO getConnection Error : ', err);
        }
        var sql = 'select * from someplace where someplace_id=?';
        conn.query(sql, [placeID], function(err, rows) {
            if (err) {
                console.error('SOMEPLACE_INFO Query Error : ', err);
            }
            conn.release();
            callback(rows);
        });
    });
};