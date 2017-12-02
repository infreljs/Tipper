module.exports = function () {
    return function (req, res, next) {
        if (req.isAuthenticated())
            return next();
        req.flash('error', '로그인이 필요한 서비스입니다!');
        res.redirect('/users/login');
    };
};