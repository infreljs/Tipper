module.exports = function (app, conn) {
    var express = require('express');
    var router = express.Router();

    router.get('/', require('./get')(conn));

    router.get('/write', require('../util/isAuthenticated')(), require('./get/write')());
    router.get('/edit/:id', require('../util/isAuthenticated')(), require('./get/edit')(conn));
    
    router.get('/comment', require('../util/isAuthenticated')(), require('./get/comment')(conn));
    router.post('/comment', require('../util/isAuthenticated')(), require('./post/comment')(conn));
    router.put('/comment', require('../util/isAuthenticated')(), require('./put/comment')(conn));
    router.delete('/comment', require('../util/isAuthenticated')(), require('./delete/comment')(conn));

    router.get('/post/:id', require('../util/isAuthenticated')(), require('./get/post')(conn));
    router.post('/post', require('../util/isAuthenticated')(), require('./post/post')(conn));
    router.put('/post/:id', require('../util/isAuthenticated')(), require('./put/post')(conn));
    router.delete('/post/:id', require('../util/isAuthenticated')(), require('./delete/post')(conn));

    router.get('/like', require('../util/isAuthenticated')(), require('./get/like')(conn));
    router.post('/like', require('../util/isAuthenticated')(), require('./post/like')(conn));


    return router;
}