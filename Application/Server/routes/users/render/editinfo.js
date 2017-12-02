module.exports = function () {
    return function (req, res) {
        res.render('users/editinfo', {
            user: {
                logined: req.isAuthenticated(),
                admin: req.user.admin,
                username: req.user.nickname,
                point: req.user.point
            },
            info: {
                email: "1",
                email_suffix: 3
            },
            error: req.flash('error')
        });
    }
}