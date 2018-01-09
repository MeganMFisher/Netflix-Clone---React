DELETE FROM thumbs
WHERE movieId = $1 AND userId = $2
RETURNING *;