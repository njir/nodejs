var crypto = require("crypto");
var inputPass = 'qwertyuiopas'; //12글자

var callback = function(err, key) {
    if (err) {
        console.error('err', err);
    }
    var cryp_pass = Buffer(key, 'binary').toString('hex');
    //내가 원하는 작업
    console.log('cryp_pass', cryp_pass);
    console.log('cryp_pass.length', cryp_pass.length);
    
  //  var crypt_pass = crypto.createHash('sha512').update(pw + salt).digest('hex');
};

var iterations = 1000;
var keylen= 24;
crypto.pbkdf2(inputPass, 'salt', iterations, keylen, callback);




var key = crypto.pbkdf2Sync(inputPass, 'salt', iterations, keylen);
var pw = Buffer(key, 'binary').toString('hex');
console.log('key', key);
console.log('pw', pw);
