var fbgraph = require("fbgraph");

var access_token = '';

fbgraph.setAccessToken(access_token);

fbgraph.get('/me', function(err, res) {
    if (err)
        console.log('err', err);
    console.log('/me', res);

});

fbgraph.get('/me', function(err, res) {
    if (err)
        console.log('err', err);
    console.log('/me?fields=picture', res);

});