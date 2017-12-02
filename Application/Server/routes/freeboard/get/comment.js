module.exports = function (conn) {
    return function (req, res) {
        var post_id = req.query.post_id;
        var sql = "SELECT freeboardComment.id AS id, freeboardComment.comment AS comment, freeboardComment.createTime AS createTime, user.nickname AS author, freeboardComment.edited FROM freeboardComment LEFT JOIN user ON freeboardComment.user_id=user.id LEFT JOIN freeboard ON freeboardComment.post_id=freeboard.id WHERE freeboard.id=?";
        conn.query(sql, [post_id], function (err, results) {
            var length = results.length;
            if (err) {
                res.send("<script>alert('댓글을 불러오는 데 실패했습니다.');</script>");
                throw err;
                return;
            }
            for (var i = 0; i < results.length; i++) {
                results[i].createTime = require('../../util/formatDateTime')(results[i].createTime);
            }
            res.render('freeboard/comment/list', {
                user: {
                    username: req.user.nickname
                },
                post: {
                    id: post_id,
                    comment: results
                }
            });
        });
    }
}