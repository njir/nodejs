var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
   connectionLimit : 150,
   host : '$IP',
   user : '$C9_USER',
   //password : '', 
   database : 'test'
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/write', function(req, res){    //index.ejs에서 write가 들어오면 펑션실행
    res.render('writeform', {title : '글 쓰기'});  //writeform.ejs임 ejs생략
    
    
});

module.exports = router;
