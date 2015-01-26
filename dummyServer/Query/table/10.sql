
-- pin_time         datetime    default current_timestamp not null, -- pin_time
-- pin
create table pin (
	pin_id           integer     not null auto_increment, -- pin_id
	pin_time         datetime    not null, -- pin_time
	pin_from_user_id varchar(45) not null, -- pin_from_user_id
	pin_to_user_id   varchar(45) not null, -- pin_to_user_id
	list_id          integer     not null,  -- list_id
	primary key(pin_id)
);

-- pin 기본키
create unique index pk_pin
	on pin ( -- pin
		pin_id asc -- pin_id
	);

-- pin
alter table pin
	add
		constraint pk_pin -- pin 기본키
		primary key (
			pin_id -- pin_id
		);

-- pin
alter table pin
	add
		constraint fk_list_to_pin -- list -> pin
		foreign key (
			list_id -- list_id
		)
		references list ( -- list
			list_id -- list_id
		)
		on delete no action
		on update no action;