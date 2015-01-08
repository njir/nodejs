var querystring = require("querystring");

function start(response, postData){
    console.log("Request handler 'start' was called");
    
    var body = '<html>' + 
    '<head>' +
    '<meta http-equiv="Content-Type" content="text/html; ' +
    'charset=utf-8 />' +
    '</head>' +
    '<body>' +
    '<form action="/upload" method="post">' +
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submt" value="Submit text" />' +
    '</form>' +
    '</body>'+
    '</html>';
    
    response.write(200, {"Contet-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData){
    console.log("Request handler 'upload' was called");
    response.write(200, {"Contet-Type": "text/html"});
    response.write("You've send : " +  querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;