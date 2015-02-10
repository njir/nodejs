var async = require('async');
var arr = [1,2,3];

async.each(arr, function(val, callback) {
  console.log('val' + val); // 1.
  callback();
}, function(err){
  console.log('모두 성공'); // 2.
});