UPDATE watching
SET finished = 'true'
WHERE userId = $2 AND movieId = $1
RETURNING *;