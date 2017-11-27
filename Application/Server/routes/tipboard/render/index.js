module.exports = function () {
    return function (req, res) {
        res.render('error', {
            user: (req.isAuthenticated()) ? ({
                logined: true,
                admin: req.user.admin,
                username: req.user.nickname,
                point: req.user.point
            }) : ({
                logined: false
            }),
            error: "페이지가 준비 중입니다."
        });
    };
};