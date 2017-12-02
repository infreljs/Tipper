module.exports = function (conn) {
    return function (req, res) {
        var comment_id = req.body.comment_id;
        var comment = req.body.comment;
        var user_id = req.user.id;

        var sql = "UPDATE freeboardComment SET comment=?, edited=1 WHERE id=?";
        conn.query(sql, [comment, comment_id], function (err, results) {
            if (err) {
                res.json({
                    status: 'f'
                });
                throw err;
                return;
            }

            res.json({
                status: 's'
            });
        });
    }
};