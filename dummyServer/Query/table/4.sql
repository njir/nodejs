
-- statedetail
create table statedetail (
	statedetail_id      integer     not null auto_increment, -- statedetail_id
	statedetail_lat     double      not null, -- statedetail_lat
	statedetail_lng     double      not null, -- statedetail_lng
	statedetail_content varchar(45) not null, -- statedetail_content
	state_id            integer     not null,      -- state_id
	primary key(statedetail_id)
);

-- statedetail 기본키2
create unique index pk_statedetail
	on statedetail ( -- statedetail
		statedetail_id asc -- statedetail_id
	);

-- statedetail
alter table statedetail
	add
		constraint pk_statedetail -- statedetail 기본키2
		primary key (
			statedetail_id -- statedetail_id
		);

-- statedetail
alter table statedetail
	add
		constraint fk_state_to_statedetail -- state -> statedetail
		foreign key (
			state_id -- state_id
		)
		references state ( -- state
			state_id -- state_id
		)
		on delete no action
		on update no action; 

