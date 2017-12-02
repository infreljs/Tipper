module.exports = function (app, conn) {
    var express = require('express');
    var router = express.Router();

    router.get('/', require('../util/isAuthenticated')(), require('./get')(conn));
    router.get('/posts', require('../util/isAuthenticated')(), require('./get/posts')(conn));

    return router;
}