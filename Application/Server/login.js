var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

exports.passport = () => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    passport.use(new LocalStrategy({
        usernameField: 'id',
        passwordField: 'pw',
        session: true,
        passReqToCallback: false
    }, (id, password, done) => {

    }))
};