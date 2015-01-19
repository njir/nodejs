var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 150,
    host: '0.0.0.0',
    user: 'njir',
    database: 'test'
});

exports.join = function(datas, callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('Join Err', err);
        }

        var sql = 'insert into admin_member(id, pw, name, email, sex, age, phone) values(?,?,?,?,?,?,?)';
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

exports.list = function(page, callback) {
    var size = 10;
    var begin = (page - 1) * size;

    pool.getConnection(function(err, conn) {
        if (err) console.err('err', err);

        conn.query('select count(*) cnt from admin_member', [], function(err, rows) {
            if (err) console.err('err', err);
            //console.log('rows', rows);
            var cnt = rows[0].cnt;
            var totalPage = Math.ceil(cnt / size);
            var pageSize = 10; //링크 열개 보여준다.
            var startPage = Math.floor((page - 1) / pageSize) * pageSize + 1;
            var endPage = startPage + (pageSize - 1);
            if (endPage > totalPage) {
                endPage = totalPage;
            }
            var max = cnt - ((page - 1) * size);
            var sql = "select num, id, name, email, sex, age, joindate, phone, withdrawal from admin_member order by num desc limit ?,?";

            conn.query(sql, [begin, size], function(err, rows) {
                if (err) console.error('err', err);

                console.log('rows', rows);
                var datas = {
                    title: '회원 리스트',
                    data: rows,
                    page: page,
                    pageSize: pageSize,
                    startPage: startPage,
                    endPage: endPage,
                    totalPage: totalPage,
                    max: max
                };
                conn.release();
                callback(datas);
            });
        });
    });
};

exports.read = function(num, callback) {
    pool.getConnection(function(err, conn) {
        if (err) console.error('err', err);
        conn.query('update admin_member set withdrawal="N" where num=?', [num], function(err, row) {
            if (err) console.error('err', err);
            console.log('row', row);
            //select는 무조건 배열로 받음
            conn.query('select * from admin_member where num=?', [num], function(err, rows) {
                if (err) console.error('err', err);
                //console.log('rows', rows);
                conn.release();

                callback(rows[0]);
            });
        });
    });
};

exports.updateform = function(num, callback) {
    pool.getConnection(function(err, conn) {
        if (err) console.err('err', err);
        conn.query('select * from admin_member where num=?', [num], function(err, rows) {
            if (err) console.err('updateform err', err);
            conn.release();

            console.log('test' + rows[0]);
            callback(rows[0]);
        });
    });
};

exports.update = function(datas, callback) {

    pool.getConnection(function(err, conn) {
        if (err) console.err('err', err);
        conn.query('update admin_member set pw=?, name=?, email=?, sex=?, phone=?, age=? where num=?', datas, function(err, row) {
            var success = false;
            if (err) console.err('update sql err', err);
            if (row.affectedRows == 1) {
                success = true;
            }
            console.log(row);
            console.log('success : ' + success);
            conn.release();
            callback(success);
        });
    });
}

exports.withdrawal = function(datas, callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('withdrawal error', err);
        }
        conn.query('update admin_member set withdrawal="Y" where id=? and pw=?', datas, function(err, rows) {
            // body...
            if (err) console.error('withdrawal sql error', err);
            console.log('rows', rows);
            var success = false;
            if (rows.affectedRows == 1) {
                success = true;
            }

            conn.release();
            callback(success);
        });
    });
}

exports.login = function(datas, callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            console.error('login Err', err);
        }
        var sql = 'select id, pw from admin_member where id=? and pw=?';
        conn.query(sql, datas, function(err, rows) {
            if (err) {
                console.error('SQL login Error', err);
            }
            var success = false;
            conn.release();
            callback(rows[0]);
        });
    });
};

exports.join100 = function(callback) {
    var success = false;

    pool.getConnection(function(err, conn) {
        if (err) console.err('err', err);

        for (var i = 0; i < 100; i++) {
            var id = 'id' + i;
            var pw = 'pw' + i;
            var name = 'name' + i;
            var email = 'email' + i + '@naver.com';
            if (i % 2 === 0) var sex = 'female';
            else sex = 'male'
            var age = i;
            var phone = i * 10;
            conn.query('insert into admin_member(id, pw, name, email, sex, age, phone) values(?,?,?,?,?,?,?)', [id, pw, name, email, sex, age, phone], function(err, rows) {
                if (err) console.err('err', err);
            });
        }
        conn.release();
        callback(success);
    });

};