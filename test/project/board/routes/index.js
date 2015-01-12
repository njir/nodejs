var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
   connectionLimit : 150,
   host : '0.0.0.0',
   user : 'njir',
   database : 'test'
});

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/write', function(req, res){    //index.ejs에서 write가 들어오면 펑션실행
    res.render('writeform', {title : '글 쓰기'});  //writeform.ejs임 ejs생략
});

router.post('/write', function(req, res){
    console.log('req.body=', req.body);
    var name = req.body.name;
    var pw = req.body.pw;
    var title = req.body.title;
    var content = req.body.content;
   
   if(name == undefined){
       res.json({'err':'no name'});
       return ;
   }
   
   if(pw == undefined){
       res.json({'err':'no pw'});
       return ;
   }
   
   
   if(title == undefined){
       res.json({'err':'no titl'});
       return ;
   }
   
   if(content == undefined){
       res.json({'err':'no content'});
       return ;
   }
   
    var arr = [pw, name, title, content];
   
   
   
   
    //DB연결
    pool.getConnection(function(err, conn){
        if(err){
            console.error('err', err);
        }
        
        //console.log('conn', conn);
        var sql = 'insert into board(pw, name, title, content, regdate, hit, good) values(?,?,?,?,now(),0,0)';
        conn.query(sql, arr, function(err, row){
            if(err)
                console.error('err', err);
            
            if(row.affectedRows ===1){
                res.json({'success':'ok'});
            }else{
                res.json({'success':'fail'});
            }
            console.log('rows', row);
        });        
    });
    
});


module.exports = router;
