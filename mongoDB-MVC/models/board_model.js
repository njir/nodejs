//board_model.js
var mongoose = require('mongoose');
var FormatDate = require('mongoose-schema-formatdate');

var boardSchema = new mongoose.Schema({ //create table의 개념
    // name, title, content, pw, hit, regdate
    name: String,
    title: String,
    content: String,
    pw: String,
    hit: {
        type: Number,
        default: 0
    },
    regdate: {
        type: FormatDate,
        format: 'YYYY-MM-DD hh:mm:ss',
        default: Date.now()
    }
});

mongoose.model('Board', boardSchema); // boards 컬렉션에 저장됨.(s 붙어서, 대소문자 구분X)
