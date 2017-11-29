module.exports = function (conn) {
    return function (req, res) {
        var comment_id = req.body.comment_id;
        var user_id = req.user.id;

        var sql = "DELETE FROM freeboardComment WHERE id=? AND user_id=?";
        conn.query(sql, [comment_id, user_id], function (err, results) {
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