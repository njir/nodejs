
--noti_insert_datetime datetime     default now() not null,     -- noti_insert_datetime
-- noti
create table noti (
	noti_id              integer      not null auto_increment, -- noti_id
	noti_content         varchar(255) not null, -- noti_content
	noti_isread          integer      not null default 0, -- noti_isread
	noti_insert_datetime datetime     not null,     -- noti_insert_datetime
	noti_thumb           varchar(128) not null,  -- noti_thumb
	primary key(noti_id)
);

-- noti 기본키
create unique index pk_noti
	on noti ( -- noti
		noti_id asc -- noti_id
	);

-- noti
alter table noti
	add
		constraint pk_noti -- noti 기본키
		primary key (
			noti_id -- noti_id
		);
