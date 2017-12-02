module.exports = function (conn) {
    return function (req, res) {
        req.query.page = (req.query.page) ? (req.query.page) : (1);
        var sql = "SELECT (SELECT COUNT(id) FROM tip WHERE user_id=?) AS tipNum, (SELECT COUNT(id) AS postNum FROM freeboard WHERE user_id=?) AS postNum, IF((SELECT SUM(payedList.price) FROM payedList LEFT JOIN tip ON payedList.tip_id = tip.id WHERE tip.user_id=?) IS NULL, 0, (SELECT SUM(payedList.price) FROM payedList LEFT JOIN tip ON payedList.tip_id = tip.id WHERE tip.user_id=?)) AS earnedPoint, (SELECT point FROM user WHERE id=?) AS point, (SELECT COUNT(tipLike.id) FROM tipLike LEFT JOIN tip ON tipLike.tip_id = tip.id WHERE tip.user_id=?) AS likeNum FROM DUAL";
        conn.query(sql, [req.user.id, req.user.id, req.user.id, req.user.id, req.user.id, req.user.id], function (err, results) {
            if (err) {
                console.log('[x] MySQL Query Error at /mypage : ' + err);
                throw err;
            }
            var dashboard = results[0];
            sql = "SELECT freeboard.id, freeboard.title, (SELECT COUNT(id) FROM freeboardLike WHERE post_id=freeboard.id) AS `like`, freeboard.view, user.nickname AS author, COUNT(freeboardComment.id) AS commentNum FROM freeboard LEFT JOIN user ON freeboard.user_id=user.id LEFT JOIN freeboardComment ON freeboard.id=freeboardComment.post_id WHERE freeboard.user_id=? GROUP BY freeboard.id";
            conn.query(sql, [req.user.id, req.user.id], function (err, results) {
                if (err) {
                    throw err;
                }
                res.render('mypage/posts', {
                    user: {
                        logined: req.isAuthenticated(),
                        admin: req.user.admin,
                        username: req.user.nickname,
                        point: req.user.point
                    },
                    dashboard: dashboard,
                    post: {
                        list: results,
                        page: {
                            nowpage: req.query.page,
                            firstpage: ((Math.ceil(req.query.page / 5) - 1) * 5) + 1,
                            maxpage: (results.length) ? (Math.ceil(results.length / 10)) : (1)
                        }
                    }
                });
            });
        });
    };
};