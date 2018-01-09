const request = require('request-promise')
// app = require('./server')  

module.exports = {

    //Get movie list for specific user


    // Add to movie list for specific user


    // Remove from movie list


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

    // Get Thumbed list for specific user


    // update thumbed list for specific user


    // Add to thumbed up or down list for specific user


}