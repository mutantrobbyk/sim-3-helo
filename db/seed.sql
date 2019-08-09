create table users (
id serial primary key,
username Varchar(20),
password varchar(20),
profile_pic text);

insert into users ( username, password, profile_pic)
values ('Melissa', 'password', 'https://previews.123rf.com/images/alexandralexey/alexandralexey1606/alexandralexey160600178/59252313-beautiful-girl-with-grey-eyes-and-long-curly-red-hair-a-nice-smile-and-straight-white-teeth-light-ma.jpg');

create table posts (
id serial primary key,
title varchar(45),
img text,
content text,
author_id integer references users(id));
insert into posts (title, img, content)
values ('Day at the Beach', 'https://www.flightnetwork.com/worlds-best-beaches/wp-content/uploads/2018/11/header-top100-beach25-475x226.jpg', 'What a lovely day at the beach');