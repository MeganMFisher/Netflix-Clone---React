DROP TABLE IF EXISTS users, mylist, watching, thumbs; 

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(180),
    email VARCHAR(180),
    img TEXT,
    auth_id TEXT
)

CREATE TABLE IF NOT EXISTS mylist (
    id SERIAL PRIMARY KEY,
    title
)

CREATE TABLE IF NOT EXISTS watching (
    id SERIAL PRIMARY KEY,

)

CREATE TABLE IF NOT EXISTS thumbs (
    id SERIAL PRIMARY KEY,
)