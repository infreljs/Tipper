module.exports = function (conn) {
    return function (req, res) {
        var post_id = req.params.id;
        var sql = "SELECT title, contents FROM freeboard WHERE id=?";
        conn.query(sql, [post_id], function (err, results) {
            res.render('freeboard/edit', {
                user: {
                    logined: req.isAuthenticated(),
                    admin: req.user.admin,
                    username: req.user.nickname,
                    point: req.user.point
                },
                post: {
                    id: post_id,
                    title: results[0].title,
                    content: results[0].contents
                }
            });
        });
    }
}