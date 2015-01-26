create table state (
	state_id      integer     not null auto_increment, -- state_id
	state_lat     double      not null, -- state_lat
	state_lng     double      not null, -- state_lng
	state_content varchar(45) not null,  -- state_content
	primary key(state_id)
);

-- state 기본키2
create unique index pk_state
	on state ( -- state
		state_id asc -- state_id
	);

-- state
alter table state
	add
		constraint pk_state -- state 기본키2
		primary key (
			state_id -- state_id
		);