/*
    Tipper

    Node.js Server v0.1(dev)

    Author: Lee Jaebin
    Author: Lee Jaeseok
*/

// Module
var express = require('express');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var smtpPool = require('nodemailer-smtp-pool');
var randomstring = require('randomstring');
var hasher = require('pbkdf2-password')();
var fs = require('fs');
var multer = require('multer');
var upload = multer({
    dest: 'uploads/'
});
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var app = express();
var mysql_dbc = require('./db')();
var conn = mysql_dbc.init();
mysql_dbc.open(conn);
require('date-utils');

// Middleware
app.use(express.static('./public'));
app.use(express.static('../Client/css'));
app.use(express.static('../Client/img'));
app.use(express.static('../Client/js'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(session({
    secret: 'T1pp3r#!^$@%',
    resave: false,
    saveUninitialized: true,
    store: new MySQLStore({
        host: 'aws.infre.kr',
        port: 3306,
        user: 'tippertest',
        password: 'tippertest',
        database: 'tippertest'
    })
}));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(function (user, done) {
    done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    var sql = 'SELECT * FROM user WHERE id=?';
    conn.query(sql, [id], function (err, results) {
        if (err) {
            done('Login Failure : ' + username);
        } else {
            done(null, results[0]);
        }
    });
});
passport.use(new LocalStrategy({
        usernameField: 'id',
        passwordField: 'pw'
    },
    function (username, password, done) {
        var sql = 'SELECT * FROM user WHERE id=?';
        conn.query(sql, ['local:' + username], function (err, results) {
            if (err || results.length == 0) {
                return done('Login Failure : ' + username);
            }
            var user = results[0];
            return hasher({
                password: password,
                salt: user.salt
            }, function (err, pass, salt, hash) {
                if (hash === user.pw) {
                    console.log('Login Success : ' + user.id);
                    done(null, user);
                } else {
                    console.log('Wrong Password : ' + user.id);
                    done(null, false);
                }
            })
        })
    }
));
passport.use(new FacebookStrategy({
        clientID: "561017494233920",
        clientSecret: "0735bd5a2a21d9c053ce54829c6de312",
        callbackURL: "/users/facebook/callback",
        profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified', 'displayName']
    },
    function (accessToken, refreshToken, profile, done) {
        console.log(profile);
        var id = 'facebook:' + profile.id;
        var sql = 'SELECT * FROM user WHERE id=?';
        conn.query(sql, [id], function (err, results) {
            if (results.length > 0) {
                done(null, results[0]);
            } else {
                var user = {
                    id: 'facebook:' + profile.id,
                    nickname: profile.displayName,
                    email: profile.emails[0].value,
                    createTime: require('./now')()
                };
                var sql = 'INSERT INTO user SET ?';
                conn.query(sql, user, function (err, results) {
                    if (err) {
                        console.log(err);
                        done('Facebook Login Error ' + profile.id);
                    } else {
                        done(null, user);
                    }
                });
            }
        });
    }
));

// Function
var account_check_admin = require('./account_check_admin')(conn);
var account_destroy = require('./account_destroy')(conn);
var authentication_send = require('./authentication_send')(nodemailer, randomstring);
var comment_add = require('./comment_add')(conn);
var comment_show = require('./comment_show')(conn);
var list_tip_payed = require('./list_tip_payed')(conn);
var logout = require('./logout')();
var point_add = require('./point_add')(conn);
var point_minus = require('./point_minus')(conn);
var profile_edit = require('./profile_edit')(conn);
var register = require('./register')(conn, hasher);
var tip_detail = require('./tip_detail')(conn);
var tip_like = require('./tip_like')(conn);
var tip_write = require('./tip_write')(conn);

// POST Router
app.post('/tipboard/write', tip_write);
app.post('/users/editProfile', profile_edit);
app.post('/users/send_authentication', authentication_send);
app.post('/users/point_add', point_add);
app.post('/board/tip_like', tip_like);
app.post('/users/point_minus', point_minus);
app.post('/users/account_destroy', account_destroy);
app.post('/users/ck_admin', account_check_admin);
app.post('/users/payed_tips', list_tip_payed);
app.post('/board/comment', comment_show);
app.post('/board/add_comment', comment_add);
app.post('/users/login',
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: false
    })
);
app.post('/users/register', register);

// GET Router
app.get('/', require('./page_show')(fs, 'main.html'));
app.get('/login', require('./page_show')(fs, 'login.html'));
app.get('/logout', logout);
app.get('/users/facebook', passport.authenticate('facebook', {
    scope: 'email'
}));
app.get('/users/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/',
        failureRedirect: '/login'
    }));
app.get('/tipboard/detail', tip_detail);

// Listen
app.listen(3333, function () {
    console.log('connected!');
});