module.exports = function () {
    return function (req, res) {
        res.render('posting', {
            user: {
                logined: req.isAuthenticated(),
                admin: req.user.admin,
                username: req.user.nickname,
                point: req.user.point
            },
            posting: {
                pageTitle: "팁"
            }
        });
    }
}