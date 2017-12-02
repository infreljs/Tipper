module.exports = function (conn) {
    return function (req, res) {
        var user_id = req.user.id;
        var tip_id = req.body.id;
        var sql = "INSERT INTO `tipLike` (user_id, tip_id) VALUES (?, ?)";
        conn.query(sql, [user_id, tip_id], function (err, result) {
            if (err) {
                res.json({
                    status: 'f'
                });
                throw err;
            }
            res.json({
                status: 's'
            });
        });
    };
}