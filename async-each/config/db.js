var mysql = require('mysql');

var dbconfig = {
	host : '127.0.0.1',
	user : 'root',
	password : '1234',
	database : 'test'
};

var pool = mysql.createPool(dbconfig);
console.log('pool: ' + pool);

module.exports = pool;