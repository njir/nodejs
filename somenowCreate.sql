insert into user(user_nickname, user_gender) values('진형탁', 12);

-- user
create table user (
-- 	user_id           integer      not null auto_increment, -- user_id
	user_nickname     varchar(45)  not null, -- user_nickname
	user_name         varchar(45)  null, -- user_name
-- 	user_password     varchar(128) not null, -- user_password
-- 	user_phone        varchar(20)  null, -- user_phone
	user_facebook     varchar(128) null,     -- user_facebook
	user_kakao        varchar(128) null,     -- user_kakao
-- 	user_profil_photo varchar(128) null,     -- user_profil_photo
-- 	user_cover_photo  varchar(128) null,     -- user_cover_photo
	user_gender       integer      not null, -- user_gender
	user_heart_cnt    integer      not null default 5, -- user_heart_cnt
	user_coupon		  varchar(500) null,
	user_regid		  varchar(500) not null,
	user_readtime     datetime     null,
	primary key(user_nickname)
) ENGINE = innodb default charset=utf8;

alter table user convert to charset utf8; 

-- badge
create table badge (
	user_nickname    varchar(45) not null, -- user_nickname
	badge_alarm      integer     null     default 0, -- badge_alarm
	badge_chat       integer     null     default 0, -- badge_chat
	badge_from_heart integer     null     default 0, -- badge_from
	primary key(user_nickname),
	foreign key(user_nickname) references user(user_nickname) on delete cascade on update cascade
) ENGINE = innodb default charset=utf8;

alter table badge convert to charset utf8; 

-- payment
create table payment (
	payment_id                     integer      not null auto_increment, -- payment_id
	payment_orderid                varchar(100) not null, -- payment_orderid
	payment_productid              varchar(100) not null, -- payment_productid
	payment_purchasetime           datetime         not null, -- payment_purchasetime
	payment_purchasestate          integer     not null, -- payment_purchasestate
	user_nickname                  varchar(45)  not null, -- user_nickname
	primary key(payment_id),
	foreign key(user_nickname) references user(user_nickname) on delete no action on update no action
) ENGINE = innodb default charset=utf8;

alter table payment convert to charset utf8; 


-- list
create table list (
	list_id            integer      not null auto_increment, -- list_id
	list_photo_id      varchar(128) null, -- list_photo_id
	list_time          datetime         not null, -- list_time
	list_remain_time   datetime         not null, -- list_remain_time
	list_number_people integer      not null, -- list_number_people
	list_lat           double       not null, -- list_lat
	list_lng           double       not null, -- list_lng
	list_open_time     integer         not null, -- list_open_time
	list_pin_cnt       integer      null default 0,     -- list_pin_cnt
	list_gender        integer      not null, -- list_gender
	list_text		   varchar(500) null,
	user_nickname      varchar(45)  not null,      -- user_nickname
	primary key(list_id),
	foreign key(user_nickname) references user(user_nickname) on delete no action on update no action
) ENGINE = innodb default charset=utf8;

alter table list convert to charset utf8; 


-- report
create table report (
	list_id       integer      not null auto_increment, -- list_id
	report_reason varchar(255) null, -- report_reason
	report_cnt    integer      not null,  -- report_cnt
	primary key(list_id),
	foreign key(list_id) references list(list_id) on delete no action on update no action
) ENGINE = innodb default charset=utf8;

alter table report convert to charset utf8; 

-- pin
create table pin (
	pin_id           integer     not null auto_increment, -- pin_id
	pin_time         datetime    default now() not null, -- pin_time
	pin_from_user_id varchar(45) not null, -- pin_from_user_id
	pin_to_user_id   varchar(45) not null, -- pin_to_user_id
	list_id          integer     not null,  -- list_id
	primary key(pin_id),
	foreign key(list_id) references list(list_id) on delete no action on update no action
)ENGINE = innodb default charset=utf8;

alter table pin convert to charset utf8; 

-- chatlist
create table chatlist (
	chatlist_id           integer      not null auto_increment, -- chatlist_id
	chatlist_message      varchar(128) null,     -- chatlist_message
	chatlist_time         datetime         not null, -- chatlist_time
	chatlist_connect      integer      default '0' not null, -- chatlist_connect
	chatlist_last_msg     varchar(128) null,     -- chatlist_last_msg
	chatlist_del          integer      default '0' not null, -- chatlist_del
	chatlist_from_user_id varchar(45)  not null, -- chatlist_from_user_id
	chatlist_to_user_id   varchar(45)  not null, -- chatlist_to_user_id
	chatlist_from_cnt     integer      null default '0',
	chatlist_to_cnt       integer      null default '0',
	pin_id                integer      not null,      -- pin_id
	primary key(chatlist_id),
	foreign key(pin_id) references pin(pin_id) on delete no action on update no action
)ENGINE = innodb default charset=utf8;

alter table chatlist convert to charset utf8; 

-- chatroom
create table chatroom (
	chatroom_id       integer      not null auto_increment, -- chatroom_id
	chatroom_msg      varchar(128) not null, -- chatroom_msg
	chatroom_time     datetime         not null, -- chatroom_time
	chatroom_nickname varchar(45)  not null, -- chatroom_nickname
	chatlist_id       integer      not null,  -- chatlist_id
	chatroom_from_user_id varchar(45)  null,
	chatroom_to_user_id varchar(45)  null,
	primary key(chatroom_id),
	foreign key(chatlist_id) references chatlist(chatlist_id) on delete no action on update no action
)ENGINE = innodb default charset=utf8;
alter table chatroom convert to charset utf8; 

-- coupon
create table coupon (
	coupon_id       integer      not null auto_increment, -- coupon_id
	coupon_photo    integer		 not null, -- coupon_photo
	coupon_count    integer		 not null, -- coupon_thumb
	coupon_content  varchar(255) not null, -- coupon_content
	coupon_lat      double       not null, -- coupon_lat
	coupon_lng      double       not null, -- coupon_lng
	coupon_name     varchar(45)  not null, -- coupon_name
	coupon_addr     varchar(30)  not null, -- coupon_addr
	coupon_phone    varchar(13)  not null, -- coupon_phone
	coupon_detail   varchar(255) not null, -- coupon_detail
	coupon_opertime varchar(128) not null,      -- coupon_opertime
	primary key(coupon_id)
)ENGINE = innodb default charset=utf8;
alter table coupon convert to charset utf8; 

-- someplace
create table someplace (
	someplace_id           integer      not null auto_increment, -- someplace_id
	someplace_title        varchar(64)  not null, -- someplace_title
	someplace_title_detail varchar(255) not null, -- someplace_title_detail
	someplace_detail       varchar(255) not null, -- someplace_detail
	someplace_photo        varchar(128) not null, -- someplace_photo
	someplace_photo_cnt    integer      not null,  -- someplace_photo_cnt
	primary key(someplace_id)
)ENGINE = innodb default charset=utf8;
alter table someplace convert to charset utf8; 

-- version
create table version (
	version_id        varchar(6) not null, -- version_id autoincrement는 int형만
	version_essential integer  default '0' not null,  -- version_essential
	primary key(version_id)
)ENGINE = innodb default charset=utf8;
alter table version convert to charset utf8; 

-- noti
create table noti (
	noti_id              integer      not null auto_increment, 
	noti_content         varchar(255) not null, 
	noti_content_detail  varchar(255) not null,
	noti_insert_datetime datetime     default now() not null,    
	primary key(noti_id)
)ENGINE = innodb default charset=utf8;
alter table noti convert to charset utf8; 


-- state
create table state (
	state_id      integer     not null auto_increment, -- state_id
	state_lat     double      not null, -- state_lat
	state_lng     double      not null, -- state_lng
	state_content varchar(45) not null,  -- state_content
	primary key(state_id)
)ENGINE = innodb default charset=utf8;
alter table state convert to charset utf8; 

-- statedetail
create table statedetail (
	statedetail_id      integer     not null auto_increment, -- statedetail_id
	statedetail_lat     double      not null, -- statedetail_lat
	statedetail_lng     double      not null, -- statedetail_lng
	statedetail_content varchar(45) not null, -- statedetail_content
	state_id            integer     not null,      -- state_id
	primary key(statedetail_id),
	foreign key(state_id) references state(state_id) on delete no action on update no action
)ENGINE = innodb default charset=utf8;
alter table state convert to charset utf8; 