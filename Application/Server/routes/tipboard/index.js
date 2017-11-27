module.exports = function (app, conn) {
    var express = require('express');
    var router = express.Router();

    router.get('/', require('./render')());
    router.get('/write', require('../util/isAuthenticated'), require('./render/write')());

    router.post('/comment/add', require('../util/isAuthenticated')(), require('./comment/add')(conn));
    router.post('/tip/like', require('../util/isAuthenticated')(), require('./tip/like')(conn));
    router.delete('/tip/unlike', require('../util/isAuthenticated')(), require('./tip/unlike')(conn));
    router.post('/tip/write', require('../util/isAuthenticated'), require('./tip/write')(conn));

    return router;
};