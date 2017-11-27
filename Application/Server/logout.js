module.exports = function () {
    return function (req, res) {
        req.logout();
        req.session.save(function () {
            res.redirect('/');
        });
    }
}