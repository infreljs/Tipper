module.exports = function () {
    return function (req, res) {
        res.render('editinfo', {
            user: {
                logined: req.isAuthenticated(),
                admin: req.user.admin,
                username: req.user.nickname,
                point: req.user.point
            },
            error: req.flash('error')
        });
    }
}