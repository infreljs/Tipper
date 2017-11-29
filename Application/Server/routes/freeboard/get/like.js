module.exports = function (conn) {
    return function (req, res) {
        var post_id = req.query.post_id;
        var user_id = req.user.id;

        var sql = "SELECT COUNT(id) AS `like` FROM freeboardLike WHERE post_id=?";
        conn.query(sql, [post_id], function (err, results) {
            if (err) {
                res.send('');
                throw err;
                return;
            }
            res.send('' + results[0].like);
        });
    }
};