var winston = require("winston"); //log도구
var logger = new winston.Logger({
    transports: [
        new winston.transports.Console({
            level: 'debug'
        }),
        new winston.transports.DailyRotateFile({
            level: 'debug',
            dirname: './logs',
            filename: 'app-debug',
            datePattern: '.yyyy-MM-dd.log',
            maxsize: 1024 * 1024 * 10,
            timestamp: true
        })
    ]
});

module.exports = logger; 