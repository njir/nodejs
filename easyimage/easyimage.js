var easyimg = require('easyimage');
var srcimg = 'koala1421644573340.jpg';

easyimg.info(srcimg).then(
    function(file) {
        var type = file.type;
        var ext = '';
        if (type == 'JPEG') {
            ext = '.jpg';
        }
        else if (type == 'GIF') {
            ext = '.gif';
        }
        else {
            ext = '.png';
        }

        var srcWidth = file.width;
        var srcHeight = file.height;
        var idx = file.name.lastIndexOf('.');
        var name = file.name.substring(0, idx); //파일 이름
        //var ext = srcimg.substring(idx); //확장자
        var dstimg = name + '-resize' + ext;

        var ratio = 0.5;
        var dstWidth = Math.floor(srcWidth * ratio);
        var dstHeight = Math.floor(srcHeight * ratio);


        easyimg.resize({
                src: srcimg,
                dst: dstimg,
                width: dstWidth,
                height: dstHeight
            },
            function(err, image) {
                if (err) console.error('err', err);
                console.log('success', image);
            });
    },
    function(err) {
        console.log(err);
    }
);

/*
///////////파일 확장자 파싱
var srcimg = 'koala1421644573340.jpg';
var idx = srcimg.lastIndexOf('.');
var name = srcimg.substring(0, idx); //파일 이름
var ext = srcimg.substring(idx); //확장자
var dstimg = name + '-resize' + ext;
*/
