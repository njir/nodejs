var fbgraph = require("fbgraph");

//var access_token = 'CAAEwfmUW5jABAMrCZBSfiMtynjADq5qZCQRYpP7gKaBLpMjM9G3rIUypLF5z2ZBq47WIpZA7ihuDk4PRZADr2aZAISExAhtAjGE3cGj45CU2thmQOlNowKgaB4sZAISgiIZChrqVux8UifyoFrZBxVCWQ0AsnETtadKPEeeuDzI3Kg4nqDgR5TN6K82XIgzxymaPEM88ZCxrZC06Jda3zk2HMTE';
var access_token = 'asdasd';


fbgraph.setAccessToken(access_token);

fbgraph.get('/me', function(err, res) {
    if (err)
        console.log('err', err);
    console.log('/me', res);
});

// fbgraph.get('/me', function(err, res) {
//     if (err)
//         console.log('err', err);
//     console.log('/me?fields=picture', res);

// });