var iap = require('in-app-purchase');
/*
For google iap, you need to name your public key file as:
iap-sanbox or iap-live
*/


iap.config({
    googlePublicKeyPath: "../rsa_key/public.pem"
});



iap.setup(function (error) {
    if (error) {
        return console.error('something went wrong...');
    }
    /*
        google receipt must be provided as an object
        {
            "data": "{stringified data object}",
            "signature": "signature from google"
        }
    */
    // iap is ready
    iap.validate(iap.GOOGLE, googleReceipt, function (err, googleRes) {
        if (err) {
            return console.error(err);
        }
        if (iap.isValidated(googleRes)) {
            // yay good!
        }
    });
});