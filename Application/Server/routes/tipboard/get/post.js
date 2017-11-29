module.exports = function (conn) {
    return function (req, res) {
        if (req.params.id == undefined) {
            res.redirect('/freeboard');
            return;
        }
        var sql = "UPDATE freeboard SET view = view + 1 WHERE id=?";
        conn.query(sql, [req.params.id], function (err, results) {
            if (err) {
                res.redirect('/error');
                console.log(err);
                return;
            }
            sql = "SELECT freeboard.title, freeboard.createTime, freeboard.contents, user.nickname as author, freeboard.view, (SELECT COUNT(id) FROM freeboardLike WHERE post_id=?) AS `like`, (SELECT IF((SELECT id FROM freeboardLike WHERE post_id=? AND user_id=?) IS NULL, 0, 1) FROM DUAL) AS liked FROM freeboard LEFT JOIN user ON freeboard.user_id=user.id WHERE freeboard.id=?";
            conn.query(sql, [req.params.id, req.params.id, req.user.id, req.params.id], function (err, results) {
                if (err) {
                    res.redirect('/error');
                    throw err;
                    return;
                }
                var title = results[0].title;
                var date = require('../../util/formatDateTime')(results[0].createTime);
                var content = results[0].contents;
                var like = results[0].like;
                var liked = results[0].liked;
                var view = results[0].view;
                var author = results[0].author;
                sql = "SELECT freeboardComment.id, freeboardComment.comment, freeboardComment.createTime, user.nickname AS author, freeboardComment.edited FROM freeboardComment LEFT JOIN user ON freeboardComment.user_id=user.id LEFT JOIN freeboard ON freeboardComment.post_id=freeboard.id WHERE freeboard.id=?";
                conn.query(sql, [req.params.id], function (err, results) {
                    if (err) {
                        res.redirect('/error');
                        throw err;
                        return;
                    }
                    for (var i = 0; i < results.length; i++) {
                        results[i].createTime = require('../../util/formatDateTime')(results[i].createTime);
                    }
                    res.render('freeboard/post', {
                        user: {
                            logined: req.isAuthenticated(),
                            admin: req.user.admin,
                            username: req.user.nickname,
                            point: req.user.point
                        },
                        post: {
                            id: req.params.id,
                            title: title,
                            date: date,
                            content: content,
                            like: like,
                            liked: liked,
                            view: view,
                            comment: results,
                            author: author
                        }
                    });
                });
            });
        });
    };
};