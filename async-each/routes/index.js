var express = require('express');
var router = express.Router();
var async = require('async');

var pool = require('../config/db'); //현재 위치에서 한칸 위로 갔다가 다시 config 폴더로 들어가서 db.js 접근
/*
 * nodata : 에러 나는 경우 테스트
 *        : async.each 사용
 * ok2		: 직접 조립하는 경우
 */

/* GET home page. */
router.get('/nodata', function(req, res) {
	pool.getConnection(function(err, conn){
		if(err) console.error('err', err);
		conn.query('select distinct(note) from async1', [], function(err, rows){
			if(err) console.error('err', err);
			console.log('rows', rows);
			var arr = [];
			for(var i = 0 ; i < rows.length ; i++){
				conn.query('select word from async1 where note=?', [rows[i].note], function(err, rows2){
						if(err) console.error('err',err);
						console.log('rows2',rows2);
						arr[i] = rows2;
				});
			} // for 문장은 동기 / conn.query는 비동기
			console.log('arr', arr);
			conn.release();
			res.json({result : arr});
		});
	});
});

router.get('/', function(req, res) {
	pool.getConnection(function(err, conn){
		if(err) console.error('err', err);
		conn.query('select distinct(note) from async1', [], function(err, rows){
			if(err) console.error('err', err);
			console.log('rows', rows);
			var arr = [];
			var a = 0;
			async.each(rows, function(row, callback) { // row 배열에 있는 것을 하나씩 꺼낸다
			  console.log('row', row); // 1.
			  // arr.push(row);
			  conn.query('select word from async1 where note=?', [row.note], function(err, rows2){
			  	if(err) console.error('err', err);
			  	console.log('rows2', rows2);
			  	var words = [];
			  	for(var i = 0 ; i < rows2.length ; i++){
			  		words[i] = rows2[i].word;
			  	} // for
			  	arr[a] = {'note' : row.note, 'words' : words};
			  	a++;
			  	callback();
			  });
			}, function(err){
			  console.log('모두 성공'); // 2.
			  console.log('arr', arr);
			  conn.release();
			  res.json({result : arr});
			}); // async.each
		});
	});
});

router.get('/ok2', function(req, res) {
	pool.getConnection(function(err, conn){
		if(err) console.error('err', err);
		conn.query('select note, word from async1 order by note', [], function(err, rows){
			if(err) console.error('err', err);
			console.log('rows', rows);
			var arr = [];
			var curr = '';
			var prev = '';
			var len = rows.length;
			var words = [];
			for(i = 0 , j = 0; i < len ; i++){
					curr = rows[i].note;
					console.log('curr', curr);
					if(curr != prev){
						console.log(curr + ':' + rows[i].word);
						prev = curr;
						words = [];
						arr[j] = {'note' : curr, 'words' : words};
						j++;
					}
					words.push(rows[i].word);
			}

			res.json({'arr':arr});
		});
	});
});

module.exports = router;
