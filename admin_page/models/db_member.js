var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 150,
    host: '0.0.0.0',
    user: 'njir',
    database: 'test'
});

exports.join = function(datas, callback) {
    var success;
    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('Join Err', err);
        }

        var sql = 'insert into member(id, pw, name, email, sex, age, phone) values(?,?,?,?,?,?,?)';
        conn.query(sql, datas, function(err, row) {
            if (err) {
                console.error('SQL Error', err);
            }
            if (row.affectedRows === 1) {
                success = true;
            }
            conn.release();
            callback(success);
        });
    });
};