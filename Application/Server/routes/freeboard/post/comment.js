module.exports = function (conn) {
    return function (req, res) {
        var post_id = req.body.post_id;
        var comment = req.body.comment;
        var user_id = req.user.id;

        var sql = "INSERT INTO freeboardComment (post_id, user_id, comment, createTime) VALUES (?, ?, ?, NOW())";
        conn.query(sql, [post_id, user_id, comment], function (err, results) {
            if (err) {
                res.json({
                    status: 'f'
                });
                throw err;
                return;
            } else if (results.affectedRows != 1) {
                res.json({
                    status: 'f'
                });
                return;
            }
            res.json({
                status: 's'
            });
        });
    }
};