module.exports = function (app, conn) {
    var express = require('express');
    var router = express.Router();

    router.get('/', require('./render')());

    return router;
}