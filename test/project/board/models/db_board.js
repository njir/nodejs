// db_board.js
var mysql = require('mysql');
var async = require('async');

var pool = mysql.createPool({
	connectionLimit: 150,
	host: '0.0.0.0',
	user: 'njir',
	database: 'test'
});

exports.write = function(datas, callback) {
	//DB연결
	var success;
	pool.getConnection(function(err, conn) {
		if (err) {
			console.error('err', err);
		}

		//console.log('conn', conn);
		var sql = 'insert into board(pw, name, title, content, regdate, hit, good) values(?,?,?,?,now(),0,0)';
		conn.query(sql, datas, function(err, row) {
			if (err)
				console.error('err', err);

			if (row.affectedRows === 1) {
				success = true;
			}
			//console.log('rows', row);
			conn.release();
			callback(success);
		});
	});
};

function c1(page, callback) {
	var size = 10;
	var begin = (page - 1) * size; // 시작 글 번호
	pool.getConnection(function(err, conn) {
		if (err) console.error('err', err);
		conn.query('select count(*) cnt from board', [], function(err, rows) {
			if (err) console.error('err', err);
			var cnt = rows[0].cnt;
			var totalPage = Math.ceil(cnt / size);
			var pageSize = 10; // 링크 10개 보여준다.
			var startPage = Math.floor((page - 1) / pageSize) * pageSize + 1;
			var endPage = startPage + (pageSize - 1);
			if (endPage > totalPage) { // 예) 20 > 17
				endPage = totalPage;
			}
			var max = cnt - ((page - 1) * size);
			var datas = {
				page: page,
				begin: begin,
				size: size,
				totalPage: totalPage,
				pageSize: pageSize,
				startPage: startPage,
				endPage: endPage,
				max: max
			};
			conn.release();
			callback(null, datas);
		});
	});
};

function c2(datas, callback) {
	pool.getConnection(function(err, conn) {
		if (err) console.error('err', err);
		var sql = "select no, name, title, DATE_FORMAT(regdate, '%Y-%m-%d %H:%i:%s') regdate, hit from board order by no desc limit ?,?";
		conn.query(sql, [datas.begin, datas.size], function(err, rows) {
			if (err) console.error('err', err);
			datas.data = rows;
			conn.release();
			callback(null, datas);
		});
	});
};



exports.list = function(page, callback) {
	var size = 10;
	var begin = (page - 1) * size; // 시작 글 번호
	async.waterfall([
		function(callback) {
			c1(page, callback);
		},
		function(datas, callback) {
			c2(datas, callback);
		}
	], function(err, datas) {
		datas.title = '리스트';
		console.log('datas', datas);
		callback(datas);
	});
};


exports.read = function(num, callback) {
	pool.getConnection(function(err, conn) {
		if (err) console.error('err', err);

		conn.query('update board set hit=hit+1 where no=?', [num], function(err, row) {
			if (err) console.error('err', err);
			console.log('row', row);

			//select는 무조건 배열로 받음
			conn.query('select * from board where no=?', [num], function(err, rows) {
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
		conn.query('select * from board where no=?', [num], function(err, rows) {
			if (err) console.err('err', err);
			conn.release();

			callback(rows[0]);
		});
	});
};

exports.update = function(datas, callback) {
	pool.getConnection(function(err, conn) {
		if (err) console.err('err', err);

		conn.query('update board set name=?, title=?, content=? where no=? and pw=?', datas, function(err, row) {
			if (err) console.err('err', err);
			var success = false;
			if (row.affectedRows == 1) {
				success = true;
			}
			conn.release();
			callback(success);
		});
	});
}

exports.delete = function(datas, callback) {
	pool.getConnection(function(err, conn) {
		if (err) console.err('err', err);

		conn.query('delete from board where no=? and pw=?', datas, function(err, row) {
			if (err) console.err('err', err);
			var success = false;

			if (row.affectedRows == 1) {
				success = true;
			}
			conn.release();
			callback(success);
		})
	})
}

//왜 600번찍히는지 모르겠음
exports.write300 = function(callback) {
	var success = false;

	pool.getConnection(function(err, conn) {
		if (err) console.err('err', err);

		for (var i = 0; i < 300; i++) {
			var pw = '1234';
			var name = 'tazan';
			var title = i + ' say ount';
			var content = 'pant ' + i;
			conn.query('insert into board(pw, name, title, content, regdate, hit, good) values(?,?,?,?,now(), 0, 0)', [pw, name, title, content], function(err, rows) {
				if (err) console.err('err', err);
			});
		}
		conn.release();
		callback(success);
	});
}