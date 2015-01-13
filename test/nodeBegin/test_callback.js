var write = function(datas, callback) {
    var c = 'hello ' + datas;
    callback(c);
};

write('world', function(c) {
    console.log(c);
});

//6라인의 'world'가 datas(1번라인의 매개변수)로 감 
// 2번라인 처리 후 callback(c)가 다시 function(c)로 옴


//너한테 world를 던질테니까 너가 hello world로 만들어서 다시 나한테 보내



function write(datas, fn) {
    var c = 'hello' + datas;
    fn(c);
};

function call(c) {
    console.log(c);
};

write('world', call);