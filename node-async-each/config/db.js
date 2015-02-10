var mysql = require('mysql');
var async = require("async");

var pool = mysql.createPool({
    connectionLimit: 150,
    host: '0.0.0.0',
    user: 'njir',
    database: 'test'
});





module.exports = pool;