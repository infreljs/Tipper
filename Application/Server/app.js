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
var cookieParser = require('cookie-parser');
var fs = require('fs');
var multer = require('multer');
var upload = multer({
    dest: 'uploads/'
});
var passport = require('passport');
var flash = require('connect-flash');
var app = express();
var mysql_dbc = require('./database')();
var conn = mysql_dbc.init();
mysql_dbc.open(conn);

// View Engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Middleware
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(session(require('./config/session')(MySQLStore)));
app.use(flash());

// Passport
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport, conn);

// Router
app.use('/', require('./routes')(app, conn));
app.use('/admin', require('./routes/admin')(app, conn));
app.use('/error', require('./routes/error')(app, conn));
app.use('/freeboard', require('./routes/freeboard')(app, conn));
app.use('/mypage', require('./routes/mypage')(app, conn));
app.use('/tipboard', require('./routes/tipboard')(app, conn));
app.use('/users', require('./routes/users')(app, conn, passport, session));

// Error Handler
app.use(function (req, res, next) {
    res.status(404).render('error', {
        user: (req.isAuthenticated()) ? ({
            logined: true,
            admin: req.user.admin,
            username: req.user.nickname,
            point: req.user.point
        }) : ({
            logined: false
        }),
        error: "404 Not Found!"
    });
});
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).render('error', {
        user: (req.isAuthenticated()) ? ({
            logined: true,
            admin: req.user.admin,
            username: req.user.nickname,
            point: req.user.point
        }) : ({
            logined: false
        }),
        error: "500 Internal Server Error!"
    });
});

// Listen
const PORT = require('./config/config').port;
const HOSTNAME = require('./config/config').hostname;
app.listen(PORT, HOSTNAME, function () {
    console.log('[v] Tipper Server Opened at ' + HOSTNAME + ':' + PORT);
});