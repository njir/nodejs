var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 150,
    host: '0.0.0.0',
    user: 'njir',
    database: 'test'
});

exports.join = function(datas, callback) {
    console.log(datas);
    
    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('getConnection Error', err);
        }
        var sql = "insert into member(id, pw, name, tel, sex, email, age, regday, upday, del_yn) values(?,?,?,?,?,?,?,now(),now(),'N')";
        conn.query(sql, datas, function(err, row) {
            var success;
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

exports.login = function(datas, callback){
  pool.getConnection(function(err, conn) {
        if (err) {
            console.error('getConnection error', err);
        }
        var sql = 'select count(*) cnt from member where id=? and pw=?';
        conn.query(sql, datas, function(err, rows) { //select는 rows로 하는게 좋음. select의 모든 결과는 배열로 옴
            if (err) {
                console.error('sql error', err);
            }
            var cnt = rows[0].cnt;
            conn.release();
            
            callback(cnt);
            
        });
    });
};