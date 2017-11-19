
const request = require('request-promise'),
app = require('./server')

module.exports = {


    getAllMovies: (req, res)  => {
        var info = {
            uri: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.apiKey}&page=1`,
            json: true         
        }

        request(info).then(resp => {
            res.send(resp)
        })
    }
}


// https://api.themoviedb.org/3/movie/now_playing?api_key=###&page=1
// https://api.themoviedb.org/3/movie/now_playing?api_key=###&page=2
// https://api.themoviedb.org/3/movie/now_playing?api_key=###&page=3


// Using the /discover/movie endpoint and searching by year, I requested for all years from 1930-2016 and the corresponding pages. This way I got 230,294 movies. I am not sure if there is a limit to the results of /discover/movie, or maybe some movies don't have year? Currently the latest id for a movie is 402985...I ran my script in 4 child processes (only 4 in order to not exceed the request limit) and requesting and storing them in db took ~8h. The downside is that /discover/movie/ does not give you the full movie info. So after I got all the movie ids I requested /movie/:id for all of the movies. That took ~12h.