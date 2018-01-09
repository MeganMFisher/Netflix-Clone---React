INSERT INTO watching(movieId, finished, userId)
VALUES ($1, 'false', $2)
RETURNING *; 