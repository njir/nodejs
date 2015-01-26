

create table chatroom (
	chatroom_id       integer      not null auto_increment, -- chatroom_id
	chatroom_msg      varchar(128) not null, -- chatroom_msg
	chatroom_time     datetime         not null, -- chatroom_time
	chatroom_nickname varchar(45)  not null, -- chatroom_nickname
	chatlist_id       integer      not null,  -- chatlist_id
	primary key(chatroom_id)
);

-- chatroom 기본키2
create unique index pk_chatroom
	on chatroom ( -- chatroom
		chatroom_id asc -- chatroom_id
	);

-- chatroom
alter table chatroom
	add
		constraint pk_chatroom -- chatroom 기본키2
		primary key (
			chatroom_id -- chatroom_id
		);

-- chatroom
alter table chatroom
	add
		constraint fk_chatlist_to_chatroom -- chatlist -> chatroom
		foreign key (
			chatlist_id -- chatlist_id
		)
		references chatlist ( -- chatlist
			chatlist_id -- chatlist_id
		)
		on delete no action
		on update no action;