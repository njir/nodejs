var mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit: 150,
    host: '0.0.0.0',
    user: 'njir',
    database: 'dummyDB'
});

//http://SERVER_IP/notice
// UIv1.5 p17
exports.notice = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('NOTICE getConnection Error : ', err);
        }
        //var sql = 'select NOTI_CONTENT, NOTI_INSERT_DATETIME from NOTI';
        var sql = 'select noti_content, date_format(noti_insert_datetime, "%y/%m/%d %r") as noti_insert_datetime from noti';
        conn.query(sql, [], function(err, rows) {
            if (err) {
                console.error('NOTICE Query Error : ', err);
            }
            //console.log(rows);
            var datas = {
                "result": rows
            };
            conn.release();
            callback(datas);
        });
    });
};
