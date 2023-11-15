const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
var passport = require("passport");
var crypto = require("crypto");
var routes = require("./routes");
const connection = require("./config/database");
const { log } = require("console");

// Package documentation - https://www.npmjs.com/package/connect-mongo
const MongoStore = require("connect-mongo")(session);

// Need to require the entire Passport config module so app.js knows about it
require("./config/passport");

/**
 * -------------- GENERAL SETUP ----------------
 */

// Gives us access to variables set in the .env file via `process.env.VARIABLE_NAME` syntax
require("dotenv").config();

// Create the Express application
var app = express();

// or can use app.use(bodyparser.json()) but no longer needed
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * -------------- SESSION SETUP ----------------
 */

// TODO
const sessionStore = new MongoStore({
  secret: process.env.SECRET,
  resave: false,
  saveUnitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
  },
});

/**
 * -------------- PASSPORT AUTHENTICATION ----------------
 */
/* 
- inistialize the middleware and so it does not get stale that it does not expire and can refresh the passport everytime it loads a route
- check if the user property is not null
if(res.session.passport.user !== null ) {
    req.user = to the user that is from the database
}
*/
app.use(passport.initialize()); //reruns everything when we load a route
// seralizre and deseralize session anything stored on req.session is stored
app.use(passport.session());

// debugging power for custom middleware
app.use((req, res, next) => {
  console.log(req.session);
  console.log(req.user);
  next();
});

/**
 * -------------- ROUTES ----------------
 */

// Imports all of the routes from ./routes/index.js
app.use(routes);

/**
 * -------------- SERVER ----------------
 */

// Server listens on http://localhost:3000
app.listen(3000);
