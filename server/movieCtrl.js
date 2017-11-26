
const request = require('request-promise'),
app = require('./server')

module.exports = {


    getAllMovies: (req, res)  => {

        var page = 1;
 
        var moviesList = [];
        (function movies() {
            request({
                uri: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.apiKey}&language=en-US&page=${page}`,
                json: true         
            }).then(resp => {
                if(page <= 10){
                moviesList.push(resp.results)
                page++
                movies()
                } else {
                    console.log(moviesList.length)
                    res.send(moviesList)
                }
            })
        })();   
    },

    getGenres: (req, res) => {
        request({uri: `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.apiKey}&language=en-US`, json: true}).then(resp => {
            res.send(resp)
        })
    }, 

    getMoviesByGenre: (req, res) => {
        request({uri: `https://api.themoviedb.org/3/genre/${req.query.genre_id}/movies?api_key=${process.env.apiKey}&language=en-US&include_adult=false&sort_by=created_at.asc`, json: true}).then(resp => {
            res.send(resp)
        })
    }


}

//https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

// https://api.themoviedb.org/3/movie/now_playing?api_key=###&page=1
// https://api.themoviedb.org/3/movie/now_playing?api_key=###&page=2
// https://api.themoviedb.org/3/movie/now_playing?api_key=###&page=3


// Using the /discover/movie endpoint and searching by year, I requested for all years from 1930-2016 and the corresponding pages. This way I got 230,294 movies. I am not sure if there is a limit to the results of /discover/movie, or maybe some movies don't have year? Currently the latest id for a movie is 402985...I ran my script in 4 child processes (only 4 in order to not exceed the request limit) and requesting and storing them in db took ~8h. The downside is that /discover/movie/ does not give you the full movie info. So after I got all the movie ids I requested /movie/:id for all of the movies. That took ~12h.

//loop through pages in recursive function push each time to array before sending the array to the front end. 