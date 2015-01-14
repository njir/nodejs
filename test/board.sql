create table board(
	no int not null auto_increment,
	pw varchar(12) not null,
	name varchar(10) not null,
	title varchar(50) not null,
	content varchar(5000) not null,
	regdate datetime not null,
	hit int not null,
	good int not null,
	primary key(no)
);

show variables like '%max_connection%';
show variables like '%wait_timeout%';	//줄여야함

*utf8로 변환
alter table board convert to charset utf8; 


* add user to mysql
grant all privileges on test.* to tak@'%' identified by '....'
flush privileges

* 외부 호스트 설정
vi /etc/mysql/my.cnf

#bind address = 127.0.0.1
bind address = 0.0.0.0

sudo service mysql restart

create table board(
	no int not null auto_increment,
	pw varchar(12) not null,
	name varchar(10) not null,
	title varchar(50) not null,
	content varchar(5000) not null,
	regdate datetime not null,
	hit int not null,
	good int not null,
	primary key(no)
);

*show full columns from member;