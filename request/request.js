//npm install cheerio
//npm install request
var request = require('request');
var cheerio = require('cheerio');

request('http://www.naver.com', function(error, response, body){
    if(!error && response.statusCode == 200){
  //      console.log(body);
    }
});


var url = 'http://blog.saltfactory.net';
request(url, function(error, response, html){
	if (error) {throw error};
	
	// console.log (html);
	
	var $ = cheerio.load(html);
	
	$('#side_today_count').each(function(){
		console.log("오늘의 방문자 수 : " + $(this).text());
	})
	
});