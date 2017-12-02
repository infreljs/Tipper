module.exports = function (conn) {
    return function (req, res) {
        req.query.page = (req.query.page) ? (req.query.page) : (1);
        var sql = "SELECT tip.id, tip.title, tip.price, (SELECT COUNT(id) FROM tipLike WHERE tip_id=tip.id) AS `like`, tip.view, tip.category, user.nickname AS author, COUNT(tipComment.id) AS commentNum FROM tip LEFT JOIN user ON tip.user_id=user.id LEFT JOIN tipComment ON tip.id=tipComment.tip_id GROUP BY tip.id";
        conn.query(sql, function (err, results) {
            if (err) {
                console.log(err);
                return;
            }
            res.render('tipboard', {
                user: {
                    logined: req.isAuthenticated(),
                    admin: req.user.admin,
                    username: req.user.nickname,
                    point: req.user.point
                },
                post: {
                    list: results
                }
            });
        });
    };
};