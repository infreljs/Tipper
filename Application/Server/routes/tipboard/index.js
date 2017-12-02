module.exports = function (app, conn) {
    var express = require('express');
    var router = express.Router();

    router.get('/', require('./get')(conn));
    router.get('/write', require('../util/isAuthenticated')(), require('./get/write')());

    // router.post('/comment/add', require('../util/isAuthenticated')(), require('./post/comment')(conn));
    router.post('/tip/like', require('../util/isAuthenticated')(), require('./post/like')(conn));

    router.post('/tip/write', require('../util/isAuthenticated')(), require('./post/write')(conn));

    return router;
};