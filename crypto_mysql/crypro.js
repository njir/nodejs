var crypto = require("crypto");

var salt = Math.round((new Date().valueOf() * Math.random())) + ''; //string화

console.log('salt', salt);

var inputPass = 'abdgahfhimkh'; //12글자
var crypt_pass = crypto.createHash('sha512').update(inputPass + salt).digest('hex');
console.log('crypt_pass', crypt_pass);
console.log('crypt_pass length', crypt_pass.length);

if (crypto.createHash('sha512').update(inputPass + salt).digest('hex') == crypt_pass) {
    console.log('비밀번호 일치');
}
else {
    console.log('비밀번호가 틀립니다');
}