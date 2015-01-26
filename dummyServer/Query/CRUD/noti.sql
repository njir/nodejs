insert into noti(noti_content, noti_insert_datetime, noti_thumb) values('2014년 감사합니다. 또 감사합니다.', '2015-01-26 13:14:23', '1');
insert into noti(noti_content, noti_insert_datetime, noti_thumb) values('오후 7:10분에 올린 사진이 공개 시간 마감으로 삭제되었습니다.', '2015-01-26 22:14:02', '2');
insert into noti(noti_content, noti_insert_datetime, noti_thumb) values('이용약관에 위배되는 사진으로 관리자에 의해 삭제되었습니다.', '2015-01-27 00:14:44', '3');

--select noti_content, date_format(noti_insert_datetime, "%y %c/%e %r") as noti_insert_datetime from noti