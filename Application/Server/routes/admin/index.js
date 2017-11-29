module.exports = function (app, conn) {
    var express = require('express');
    var router = express.Router();

    router.get('/', require('../util/isAuthenticated')(), require('./render')(conn));

    return router;
}