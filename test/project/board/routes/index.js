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
   
   if(name === undefined){
       res.json({'err':'no name'});
       return ;
   }
   
   if(pw === undefined){
       res.json({'err':'no pw'});
       return ;
   }
   
   
   if(title === undefined){
       res.json({'err':'no titl'});
       return ;
   }
   
   if(content === undefined){
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
            
            conn.release();
            
        });        
    });
    
});


router.get('/list', function(req, res) {
    res.redirect('/list/1');
    
});


router.get('/list/:page', function(req, res) {
    var page = req.params.page;
    page = parseInt(page, 10);
    var size = 10;
    var begin = (page - 1) * size;
    
    pool.getConnection(function(err, conn) {
       if(err) console.err('err', err);
       
       conn.query('select count(*) cnt from board', [], function(err, rows){
           if(err) console.err('err', err);
           //console.log('rows', rows);
           var cnt = rows[0].cnt;
           var totalPage = Math.ceil(cnt / size);
           var pageSize = 10; //링크 열개 보여준다.
           var startPage= Math.floor((page-1) / pageSize) * pageSize + 1;
           var endPage = startPage + (pageSize-1);
           if(endPage > totalPage){
               endPage = totalPage;
           }
           var max = cnt - ((page-1) * size);
           
           var sql = "select no, name, title, DATE_FORMAT(regdate, '%Y-%m-%d %H:%i:%s') regdate, hit from board order by no desc limit ?,?";
           conn.query(sql, [begin, size], function(err, rows) {
                if(err) console.error('err', err);
            
                console.log('rows', rows);
                var datas = {
                    title: '리스트', 
                    data:rows,
                    page:page,
                    pageSize:pageSize,
                    startPage:startPage,
                    endPage:endPage,
                    totalPage:totalPage,
                    max:max
                };
            
                res.render('list', datas); 
         
                conn.release();   
            });
        });
    });

    
    /*
    pool.getConnection(function(err, conn) {
        if(err) console.error('err', err);
        
        var sql = "select no, name, title, DATE_FORMAT(regdate, '%Y-%m-%d %H:%i:%s') regdate, hit from board order by no desc";
        conn.query(sql, [], function(err, rows) {
        if(err) console.error('err', err);
            
            console.log('rows', rows);
            var datas = {title: '리스트', data:rows};
            
            res.render('list', datas); 
         
        });
        conn.release();   
    });
    */
});



module.exports = router;
