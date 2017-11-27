module.exports = function (app, conn) {
    var express = require('express');
    var router = express.Router();

    router.get('/', require('./render')());
    router.get('/post/:id', require('./post')());

    router.post('/comment/add', require('../util/isAuthenticated')(), require('./comment/add')(conn));
    router.post('/comment/list', require('../util/isAuthenticated')(), require('./comment/list')(conn));

    return router;
}