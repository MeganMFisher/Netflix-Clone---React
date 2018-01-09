INSERT INTO thumbs(movieId, thumbs, userId)
VALUES($1, $2, $3)
RETURNING *;