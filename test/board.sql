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