// db.js
var mongoose = require('mongoose');
var uri = 'mongodb://localhost/test';
var options = {
    server: {
        poolSize: 100
    }
};
var db = mongoose.createConnection(uri, options);

db.on('error', function(err) {
    if (err) {
        //throw err;
        console.log('mongoDB Error : ', err);
    }
});

db.once('open', function callback() {
    console.info('MongoDB connected successfully');
});

module.exports = db;