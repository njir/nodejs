insert into version(version_id, version_essential) values('000001', '0');
insert into version(version_id, version_essential) values('000002', '1');

select version_id, version_essential from version order by version_id desc limit 1
//가장 최근데이터 1개만 가져옴