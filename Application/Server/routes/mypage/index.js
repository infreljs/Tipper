module.exports = function (app, conn) {
    var express = require('express');
    var router = express.Router();

    router.get('/', require('../util/isAuthenticated')(), require('./render')(conn));
    router.get('/posts', require('../util/isAuthenticated')(), require('./render/posts')(conn));
    router.get('/tips', require('../util/isAuthenticated')(), require('./render/tips')(conn));
    router.get('/payedtips', require('../util/isAuthenticated')(), require('./payedtips')(conn));

    return router;
}