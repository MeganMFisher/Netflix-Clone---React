const request = require('request-promise')

module.exports = {

    //Get movie list for specific user
    getMovieList: (req, res) => {
        const db = req.app.get('db');
        // db.getMovieList(req.params.id).then(resp => {
        //     res.send(resp)
        // })
    },

    // Add to movie list for specific user
    addToMovieList: (req, res) => {
        const db = req.app.get('db');
        // db.addToWatchList([req.query.movieId, req.params.id]).then(resp => {
        //     res.send(resp)
        // })
    },

    // Remove from movie list
    removeFromMovieList: (req, res) => {
        const db = req.app.get('db');
        // db.removeFromMovieList([req.query.movieId, req.params.id]).then(resp => {
        //     res.send(resp)
        // })
    }
}