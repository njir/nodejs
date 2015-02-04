//npm install node-schedule

var schedule = require('node-schedule');

//지정된 날짜 시간에 실행
var date = new Date(2015, 1, 3, 9, 18, 0); 
//2015년 2월 3일 9시 15분에 실행이 아니라 
//월은 0부터 시작임

console.log('date', date);

var job1 = schedule.scheduleJob(date, function(){
    console.log('job1 실행시간 : ', date);
});

var rule = new schedule.RecurrenceRule();
var min = 23;//매 23분마다 실행
rule.minute = min;

var job2 = schedule.scheduleJob(rule, function(){
    console.log('job2 실행시간 : ', min);
});

// 분 시 일 월 요일(0이 일요일)
var job3 = schedule.scheduleJob('28 * * * *', function() {
    console.log('Job3이 실행됨');
});

var cron = require('cron');
var cronJob = cron.job("* * * * * *", function(){
    // perform operation e.g. GET request http.get() etc.
    console.info('cron job completed');
}); 
cronJob.start();