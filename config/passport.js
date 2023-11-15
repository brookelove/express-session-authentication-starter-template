const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const connection = require("./database");
const { validPassword } = require("../lib/passwordUtils");
const User = connection.models.User;

// pass in the strategy and verify callback
// passport.use();

// custom field
const customFields = {
  usernameField: "uname",
  passwordField: "pw",
};

// pass results of auth to
const verifyCallback = (username, password, done) => {
  //username is value that we recive that is from a login form
  //you have to call it username and password you can also do custom fields to help passport
  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        return done(null, false);
      }

      const isValid = validPassword(password, user.hash, user.salt);

      if (isValid) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    })
    .catch((err) => {
      done(err);
    });
};

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);
/* ---- GIVEN CODE FROM PASSPORTJS we reconfigured above
passport.use(new LocalStrategy(function verify(username, password, cb) {
    db.get('SELECT * FROM users WHERE username = ?', [ username ], function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false, { message: 'Incorrect username or password.' }); }
  
      crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
        if (err) { return cb(err); }
        if (!crypto.timingSafeEqual(user.hashed_password, hashedPassword)) {
          return cb(null, false, { message: 'Incorrect username or password.' });
        }
        return cb(null, user);
      });
    });
  }));
*/
passport.serializeUser((user, done) => {
  done(null, user.id);
});
// catch the user from the session
passport.deserializeUser((userId, done) => {
  // 1. grab user from the database and attach the found user to the req.user DB
  User.findById(userId)
    .then((user) => {
      done(null, user);
    })
    .catch((err) => done(err));
});
