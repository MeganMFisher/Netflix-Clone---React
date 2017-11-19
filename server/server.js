require('dotenv').config()

const express = require('express')
, bodyParser = require('body-parser')
, passport = require('passport')
, Auth0Strategy = require('passport-auth0')
, massive = require('massive')
, session = require('express-session')

const app = express();



app.listen(process.env.PORT, () => {
    console.log(`Listening on port: ${process.env.PORT}`);
})   
