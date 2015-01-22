var easyimg = require('easyimage');
var srcImg = 'koala1421644573340.jpg'

var idx = srcImg.lastIndexOf('.');
var name = srcImg.substring(0, idx);
var ext = srcImg.substring(idx);
var dstImg = name + '_thumbnail' + ext;


easyimg.thumbnail({
    src: srcImg,
    dst: 'koala_thumb.jpg',
    width: 128,
    height: 128,
    x: 0,
    y: 0
}).then(function(file) {
    console.log('file', file);
});
