const request = require('request-promise')

module.exports = {

    // get thumbs
    getThumbs: (req, res) => {
        const db = req.app.get('db');
        db.getThumbs(req.params.id).then(resp => {
            console.log(resp)
            res.send(resp)
        })
    },

    // update thumbed list for specific user
    updateThumb: (req, res) => {
        const db = req.app.get('db');
        db.updateThumb([req.body.movieId, req.body.thumbs, req.params.id]).then(resp => {
            res.send(resp)
        })

    },

    // Add to thumbed up or down list for specific user
    addThumb: (req, res) => {
        const db = req.app.get('db');
        db.addThumb([req.body.movieId, req.body.thumbs, req.params.id]).then(resp => {
            res.send(resp)
        })
    }
}