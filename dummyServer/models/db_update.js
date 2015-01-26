//2015-01-26 DB연동 테스트
var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 150,
    host: '0.0.0.0',
    user: 'njir',
    database: 'dummyDB'
});

// http://SERVER_IP/update
// 처음 로딩페이지에서 
exports.update = function(data, callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('UPDATE getConnection Error : ', err);
        }
        var sql = 'select version_id, version_essential from version order by version_id DESC limit 1';
        conn.query(sql, [], function(err, rows) {
            if (err) {
                console.error('VERSION Query Error : ', err);
            }
            var datas = {
                "result": rows
            };
            conn.release();
            callback(datas);
        });
    });
};