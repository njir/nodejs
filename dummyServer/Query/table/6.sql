
-- coupon
create table coupon (
	coupon_id       integer      not null auto_increment, -- coupon_id
	coupon_photo    varchar(128) not null, -- coupon_photo
	coupon_thumb    varchar(128) not null, -- coupon_thumb
	coupon_content  varchar(255) not null, -- coupon_content
	coupon_lat      double       not null, -- coupon_lat
	coupon_lng      double       not null, -- coupon_lng
	coupon_name     varchar(45)  not null, -- coupon_name
	coupon_addr     varchar(30)  not null, -- coupon_addr
	coupon_phone    varchar(13)  not null, -- coupon_phone
	coupon_detail   varchar(255) not null, -- coupon_detail
	coupon_opertime varchar(128) not null,      -- coupon_opertime
	primary key(coupon_id)
);

-- coupon 기본키2
create unique index pk_coupon
	on coupon ( -- coupon
		coupon_id asc -- coupon_id
	);

-- coupon
alter table coupon
	add
		constraint pk_coupon -- coupon 기본키2
		primary key (
			coupon_id -- coupon_id
		);