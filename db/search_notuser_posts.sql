select * from posts
where user_id != ($1) and title LIKE ($2)