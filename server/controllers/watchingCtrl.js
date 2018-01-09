const request = require('request-promise')

module.exports = {

    // Get watching list for specific user
    getToWatchList: (req, res) => {
        const db = req.app.get('db');
        db.getWatchList(req.params.id).then(resp => {
            res.send(resp)
        })
    },
    
    // Update watching list when finished with show.
    finishedMovie: (req, res) => {
        const db = req.app.get('db');
        db.finishedMovie([req.query.movieId, req.params.id]).then(resp => {
            res.send(resp)
        })
    },

    // Add to watching list for specific user
    addToWatch: (req, res) => {
        const db = req.app.get('db');
        db.addToWatchList([req.query.movieId, req.params.id]).then(resp => {
            res.send(resp)
        })
    }


}