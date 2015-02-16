var request = require('request');

// request.post(
//     'https://kapi.kakao.com/v1/user/me',
//     { form: { Authorization: 'Bearer rNHBKTxN9lH5ezKJWuR-noMwJPBPjDB8mwYUSawQQjMAAAFLfE_vvg' } },
//     function (error, response, body) {
//         console.log(response, body);
//         if (!error && response.statusCode == 200) {
//             console.log(body);
//         }
//     }
// );


///된다
var options = {
    url: 'https://kapi.kakao.com/v1/user/me',
    headers: {
        'Authorization': 'Bearer rNHBKTxN9lH5ezKJWuR-noMwJPBPjDB8mwYUSawQQjMAAAFLfE_vvg'
    }
};

function kakaoCallback(error, response, body) {
    console.log('kako body : ', body);
    console.log('body.id', response.body.id);
    
    if (!error && response.statusCode == 200) {
        var info = JSON.parse(body);
        console.log(info);
        console.log(info.id);
        console.log(info.stargazers_count + " Stars");
        console.log(info.forks_count + " Forks");
    }
}

request(options, kakaoCallback);

https://github.com/voronianski/realtime-geolocation-demo.git


//필터링 테스트
// Create the original array.
var numbers = [1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 5, 5, 6, 7, 8, 2, 9, 9, 7, 3, 4, 5, 76, 4, 2, 3, 4, 5, 6, 7, 8, 5, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8];

var uniq = numbers.reduce(function(a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
}, []);


console.log('uniq', uniq);