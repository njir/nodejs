var http = require("http");
var url = require("url");

function start(route, handle){
    function onRequest(request, response){
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received");
        
        request.setEncoding("utf8");
        
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '" +
            postDataChunk + "'.");
        });
        
        request.addListener("end", function(){
            route(handle, pathname, response, postData);
        });
    
    }
    
    http.createServer(onRequest).listen(process.env.PORT, process.env.IP);
    console.log("Server has started");
}

exports.start = start;

// 서버를 생성할 때 서버 생성 메소드의 파라미터로 함수를 넘깁니다. (onRequest)
// 요청이 올 때마다 파라미터로 넘긴 함수가 호출됩니다.
// 이를 callback