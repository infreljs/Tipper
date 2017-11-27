module.exports = function () {
    return function (req, res) {
        res.render('login', {
            user: {
                logined: req.isAuthenticated()
            },
            error: req.flash('error')
        });
    };
};