create table member(
    num int not null auto_increment,
	id varchar(20) not null,
	pw varchar(20) not null,
	name varchar(20) not null,
	email varchar(20) not null,
	sex varchar(10) not null,
	age int not null,
	withdrawal varchar(2) default 'N',
	joindate TIMESTAMP default CURRENT_TIMESTAMP,
	phone varchar(20) not null,
	primary key(id),
    key(num)
);