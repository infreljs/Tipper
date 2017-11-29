module.exports = function () {
    return function (req, res) {
        res.render('template/posting', {
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