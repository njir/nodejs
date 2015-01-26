create table version (
	version_id        varchar(6) not null, -- version_id autoincrement는 int형만
	version_essential integer  default '0' not null,  -- version_essential
	primary key(version_id)
);

-- version 기본키2
create unique index pk_version
	on version ( -- version
		version_id asc -- version_id
	);

-- version
alter table version
	add
		constraint pk_version -- version 기본키2
		primary key (
			version_id -- version_id
		);
