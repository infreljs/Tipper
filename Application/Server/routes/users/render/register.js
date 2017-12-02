module.exports = function () {
    return function (req, res) {
        res.render('users/register', {
            user: {
                logined: req.isAuthenticated()
            },
            error: req.flash('error')
        });
    }
}