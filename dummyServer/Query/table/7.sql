

-- user
create table user (
	user_id           integer      not null auto_increment, -- user_id
	user_nickname     varchar(45)  not null, -- user_nickname
	user_name         varchar(45)  not null, -- user_name
	user_password     varchar(128) not null, -- user_password
	user_phone        varchar(20)  not null, -- user_phone
	user_facebook     varchar(128) null,     -- user_facebook
	user_kakao        varchar(128) null,     -- user_kakao
	user_profil_photo varchar(128) null,     -- user_profil_photo
	user_cover_photo  varchar(128) null,     -- user_cover_photo
	user_age          integer      not null, -- user_age
	user_gender       integer      not null, -- user_gender
	user_heart_cnt    integer      not null default 5, -- user_heart_cnt
	coupon_id         integer      null ,     -- coupon_id
	primary key(user_id)
);

-- user 기본키
create unique index pk_user
	on user ( -- user
		user_nickname asc -- user_nickname
	);

-- user
alter table user
	add
		constraint pk_user -- user 기본키
		primary key (
			user_nickname -- user_nickname
		);

-- user
alter table user
	add
		constraint fk_coupon_to_user -- coupon -> user
		foreign key (
			coupon_id -- coupon_id
		)
		references coupon ( -- coupon
			coupon_id -- coupon_id
		)
		on delete no action
		on update no action;

