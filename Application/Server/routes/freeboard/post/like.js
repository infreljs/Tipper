module.exports = function (conn) {
    return function (req, res) {
        var post_id = req.body.post_id;
        var user_id = req.user.id;

        var sql = "SELECT IF((SELECT id FROM freeboardLike WHERE post_id=? AND user_id=?) IS NULL, 0, 1) AS liked FROM DUAL";
        conn.query(sql, [post_id, user_id], function (err, results) {
            if (err) {
                res.json({
                    status: 'f'
                });
                console.log(err);
                return;
            }
            if (results[0].liked) {
                sql = "DELETE FROM freeboardLike WHERE post_id=? AND user_id=?";
                conn.query(sql, [post_id, user_id], function (err, results) {
                    if (err) {
                        res.json({
                            status: 'f'
                        });
                        console.log(err);
                        return;
                    }
                    res.json({
                        status: 's',
                        liked: false
                    });
                });
                return;
            } else {
                sql = "INSERT INTO freeboardLike (post_id, user_id) VALUES (?, ?)";
                conn.query(sql, [post_id, user_id], function (err, results) {
                    if (err) {
                        res.json({
                            status: 'f'
                        });
                        console.log(err);
                        return;
                    }
                    res.json({
                        status: 's',
                        liked: true
                    });
                });
            }
        });
    }
};