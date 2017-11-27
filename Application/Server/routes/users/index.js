var hasher = require('pbkdf2-password')();
var nodemailer = require('nodemailer');
var smtpPool = require('nodemailer-smtp-pool');
var randomstring = require('randomstring');

module.exports = function (app, conn, passport, session) {
    var express = require('express');
    var router = express.Router();

    router.get('/login', require('../util/isUnauthenticated')(), require('./render/login')());
    router.get('/logout', require('../util/isAuthenticated')(), require('./logout')());
    router.get('/register', require('../util/isUnauthenticated')(), require('./render/register')());
    router.get('/check/iddup', require('../util/isUnauthenticated')(), require('./check/iddup')(conn));
    router.get('/editinfo', require('../util/isAuthenticated')(), require('./render/editinfo')());
    router.get('/login/facebook', passport.authenticate('facebook', {
        scope: 'email'
    }));
    router.get('/login/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/',
            failureRedirect: '/users/login'
        })
    );

    router.post('/login', require('../util/isUnauthenticated')(), passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
        failureFlash: true
    }));
    router.post('/register', require('../util/isUnauthenticated')(), require('./register')(conn, hasher));
    router.post('/authsend', require('./auth_send')(nodemailer, randomstring, smtpPool, session));

    return router;
}