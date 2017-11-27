module.exports = function (conn) {
    return function (req, res) {
        var post_id = req.body.post_id;
        var comment = req.body.comment;
        var user_id = req.user.id;
        var result = "";
        var dt = new Date();
        var d = dt.toFormat('YYYY-MM-DD HH24:MI:SS');
        var sql = "INSERT INTO freeboardComment (post_id, user_id, comment, createTime) VALUES (?, ?, ?, ?)";
        conn.query(sql, function (err, results) {
            if (err || result.affectedRows != 1) {
                res.json({
                    status: 'f'
                });
                throw err;
            } else {
                res.json({
                    status: 's'
                });
            }
        });
    }
};