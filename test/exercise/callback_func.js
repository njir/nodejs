var fs = require('fs');

fs.readFile('./callback_func.js', function(err, data){
    if(err) {
        throw err;
    }else{
        console.log(data);
        console.log(data.toString());
    }
});