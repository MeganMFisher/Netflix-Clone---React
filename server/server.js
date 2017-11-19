require('dotenv').config()

const express = require('express')
, bodyParser = require('body-parser')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, massive = require('massive')
, session = require('express-session')

const app = express();

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());


massive(process.env.CONNECTIONSTRING).then( db => {
    app.set('db', db);

    app.get('db').init.seed_file().then(res => console.log(res))
    .catch(err => console.log(err))
})





app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
})   
