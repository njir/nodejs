

create table chatlist (
	chatlist_id           integer      not null auto_increment, -- chatlist_id
	chatlist_message      varchar(128) null,     -- chatlist_message
	chatlist_time         datetime         not null, -- chatlist_time
	chatlist_connect      integer      default '0' not null, -- chatlist_connect
	chatlist_last_msg     varchar(128) null,     -- chatlist_last_msg
	chatlist_del          integer      default '0' not null, -- chatlist_del
	chatlist_from_user_id varchar(45)  not null, -- chatlist_from_user_id
	chatlist_to_user_id   varchar(45)  not null, -- chatlist_to_user_id
	pin_id                integer      not null,      -- pin_id
	primary key(chatlist_id)
);

-- chatlist 기본키2
create unique index pk_chatlist
	on chatlist ( -- chatlist
		chatlist_id asc -- chatlist_id
	);

-- chatlist
alter table chatlist
	add
		constraint pk_chatlist -- chatlist 기본키2
		primary key (
			chatlist_id -- chatlist_id
		);

-- chatlist
alter table chatlist
	add
		constraint fk_pin_to_chatlist -- pin -> chatlist
		foreign key (
			pin_id -- pin_id
		)
		references pin ( -- pin
			pin_id -- pin_id
		)
		on delete no action
		on update no action;

