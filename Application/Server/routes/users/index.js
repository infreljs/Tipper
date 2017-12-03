var hasher = require('pbkdf2-password')();
var nodemailer = require('nodemailer');
var smtpPool = require('nodemailer-smtp-pool');
var randomstring = require('randomstring');

module.exports = function (app, conn, passport, session) {
    var express = require('express');
    var router = express.Router();

    router.get('/login', require('../util/isUnauthenticated')(), require('./get/login')());
    router.get('/logout', require('../util/isAuthenticated')(), require('./get/logout')());
    router.get('/register', require('../util/isUnauthenticated')(), require('./get/register')());
    router.get('/check/iddup', require('../util/isUnauthenticated')(), require('./get/iddup')(conn));
    router.get('/editinfo', require('../util/isAuthenticated')(), require('./get/editinfo')());
    router.get('/withdraw', require('../util/isAuthenticated')(), require('./get/withdraw')(conn));
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
    router.post('/register', require('../util/isUnauthenticated')(), require('./post/register')(conn, hasher));
    router.post('/authsend', require('./post/auth_send')(nodemailer, randomstring, smtpPool, session));

    return router;
}