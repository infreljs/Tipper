module.exports = function () {
    return function (req, res) {
        res.status(500).render('error', {
            user: (req.isAuthenticated()) ? ({
                logined: true,
                admin: req.user.admin,
                username: req.user.nickname,
                point: req.user.point
            }) : ({
                logined: false
            }),
            error: "500 Internal Server Error!"
        });
    };
};