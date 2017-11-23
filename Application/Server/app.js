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
var fs = require('fs');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var app = express();
var mysql_dbc = require('./db')();
var conn = mysql_dbc.init();
mysql_dbc.open(conn);
require('date-utils');

// Middleware
app.use(express.static('../Client'));
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

// Function
var account_check_admin = require('./account_check_admin')(conn);
var account_destroy = require('./account_destroy')(conn);
var authentication_send = require('./authentication_send')(nodemailer, randomstring);
var comment_add = require('./comment_add')(conn);
var comment_show = require('./comment_show')(conn);
var list_tip_payed = require('./list_tip_payed')(conn);
var point_add = require('./point_add')(conn);
var point_minus = require('./point_minus')(conn);
var profile_edit = require('./profile_edit')(conn);
var register = require('./register')(conn);
var tip_detail = require('./tip_detail')(conn);
var tip_like = require('./tip_like')(conn);
var tip_write = require('./tip_write')(conn);

// POST Router
app.post('/tipboard/write', tip_write);
app.post('/users/editProfile', profile_edit);
app.post('/users/send_authentication', authentication_send);
app.get('/tipboard/detail', tip_detail);
app.post('/users/point_add', point_add);
app.post('/board/tip_like', tip_like);
app.post('/users/point_minus', point_minus);
app.post('/users/account_destroy', account_destroy);
app.post('/users/ck_admin', account_check_admin);
app.post('/users/payed_tips', list_tip_payed);
app.post('/board/comment', comment_show);
app.post('/board/add_comment', comment_add);
app.post('/users/register', register);

// GET Router
app.get('/', require('./page_show')(fs, 'main.html'));

// Listen
app.listen(3333, function () {
    console.log('connected!');
});