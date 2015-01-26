
-- report
create table report (
	list_id       integer      not null auto_increment, -- list_id
	report_reason varchar(255) not null, -- report_reason
	report_cnt    integer      not null,  -- report_cnt
	primary key(list_id)
);

-- report 기본키2
create unique index pk_report
	on report ( -- report
		list_id asc -- list_id
	);

-- report
alter table report
	add
		constraint pk_report -- report 기본키2
		primary key (
			list_id -- list_id
		);

-- report
alter table report
	add
		constraint fk_list_to_report -- list -> report
		foreign key (
			list_id -- list_id
		)
		references list ( -- list
			list_id -- list_id
		)
		on delete no action
		on update no action;