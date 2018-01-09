UPDATE thumbs
SET thumbs = $2
WHERE userid = $3 AND movieid = $1
RETURNING *;