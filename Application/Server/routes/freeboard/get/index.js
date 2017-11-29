module.exports = function (conn) {
    return function (req, res) {
        req.query.page = (req.query.page) ? (req.query.page) : (1);
        var sql = "SELECT freeboard.id, freeboard.title, (SELECT COUNT(id) FROM freeboardLike WHERE post_id=freeboard.id) AS `like`, freeboard.view, user.nickname AS author, COUNT(freeboardComment.id) AS commentNum FROM freeboard LEFT JOIN user ON freeboard.user_id=user.id LEFT JOIN freeboardComment ON freeboard.id=freeboardComment.post_id GROUP BY freeboard.id";
        conn.query(sql, function (err, results) {
            if (err) {
                console.log(err);
                return;
            }
            res.render('freeboard', {
                user: {
                    logined: req.isAuthenticated(),
                    admin: req.user.admin,
                    username: req.user.nickname,
                    point: req.user.point
                },
                freeboard: {
                    list: results.slice((req.query.page - 1) * 10, (req.query.page) * 10),
                    page: {
                        nowpage: req.query.page,
                        firstpage: ((Math.ceil(req.query.page / 5) - 1) * 5) + 1,
                        maxpage: (results.length) ? (Math.ceil(results.length / 10)) : (1)
                    }
                }
            });
        });
    };
};