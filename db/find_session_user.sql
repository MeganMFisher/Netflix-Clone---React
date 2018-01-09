SELECT *
FROM users
WHERE id = $1;
-- JOIN watching on users.id = watching.userId 
-- WHERE users.id = $1;