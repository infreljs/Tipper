module.exports = function () {
    return function (req, res) {
        res.render('register', {
            user: {
                logined: req.isAuthenticated()
            },
            error: req.flash('error')
        });
    }
}