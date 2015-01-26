create table someplace (
	someplace_id           integer      not null auto_increment, -- someplace_id
	someplace_title        varchar(64)  not null, -- someplace_title
	someplace_title_detail varchar(255) not null, -- someplace_title_detail
	someplace_detail       varchar(255) not null, -- someplace_detail
	someplace_photo        varchar(128) not null, -- someplace_photo
	someplace_photo_cnt    integer      not null,  -- someplace_photo_cnt
	primary key(someplace_id)
);

-- someplace 기본키2
create unique index pk_someplace
	on someplace ( -- someplace
		someplace_id asc -- someplace_id
	);

-- someplace
alter table someplace
	add
		constraint pk_someplace -- someplace 기본키2
		primary key (
			someplace_id -- someplace_id
		);