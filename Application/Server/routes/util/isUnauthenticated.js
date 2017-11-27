module.exports = function () {
    return function (req, res, next) {
        if (req.isUnauthenticated())
            return next();
        res.redirect('/');
    };
};