
-- list
create table list (
	list_id            integer      not null auto_increment, -- list_id
	list_distance      integer      not null, -- list_distance
	list_photo_id      varchar(128) not null, -- list_photo_id
	list_time          datetime         not null, -- list_time
	list_remain_time   datetime         not null, -- list_remain_time
	list_number_people integer      not null, -- list_number_people
	list_lat           double       not null, -- list_lat
	list_lng           double       not null, -- list_lng
	list_open_time     datetime         not null, -- list_open_time
	list_pin_cnt       integer      null,     -- list_pin_cnt
	list_gender        integer      not null, -- list_gender
	user_nickname      varchar(45)  not null,      -- user_nickname
	primary key(list_id)
);

-- list 기본키
create unique index pk_list
	on list ( -- list
		list_id asc -- list_id
	);

-- list
alter table list
	add
		constraint pk_list -- list 기본키
		primary key (
			list_id -- list_id
		);

-- list
alter table list
	add
		constraint fk_user_to_list -- user -> list
		foreign key (
			user_nickname -- user_nickname
		)
		references user ( -- user
			user_nickname -- user_nickname
		)
		on delete no action
		on update no action;
