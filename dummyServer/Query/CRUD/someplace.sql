--1. insert
insert into someplace(someplace_title, someplace_title_detail, someplace_detail, someplace_photo, someplace_photo_cnt) values ('강원도 오션월드', '겨울이 더 핫한 물좋은 워터파크', '헌팅명소, 스파설명, 남녀미팅', '1', '5');
insert into someplace(someplace_title, someplace_title_detail, someplace_detail, someplace_photo, someplace_photo_cnt) values ('전라도 휘닉스파크', '여름이 더욱 더 핫한 물좋은 스키장', '내가 헌팅명소다, 스파설명 300미터 암반미팅', '2', '4');
insert into someplace(someplace_title, someplace_title_detail, someplace_detail, someplace_photo, someplace_photo_cnt) values ('제주도 해변', '겨울이 더 핫한 물좋은 제주도 해변', '겨울에가면 헌팅명소, 물온도 적당, 수영가능', '3', '5');
insert into someplace(someplace_title, someplace_title_detail, someplace_detail, someplace_photo, someplace_photo_cnt) values ('전라남도 목포', '가을에 더 핫한 물좋은 영산강', '4대강보다 더 뛰어난 영산강의 물맛', '4', '4');

--2. select 
select someplace_id, someplace_title, someplace_title_detail from someplace;
select * from someplace where someplace_id=?;

