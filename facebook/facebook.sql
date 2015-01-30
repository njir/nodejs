create table users(
    id int not null auto_increment,
    facebook_id varchar(30) null,
    facebook_username varchar(30) not null,
    facebook_token varchar(300) not null,
    facebook_email varchar(50) not null,
    facebook_name varchar(30) not null,
    facebook_photo varchar(300) not null,
    primary key(id)
);