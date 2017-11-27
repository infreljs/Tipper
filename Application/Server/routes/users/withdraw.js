module.exports = function (conn) {
    return function (req, res) {
        var user_id = req.body.user_id;
        var sql = "DELETE FROM `user` WHERE user_id='" + user_id + "'";
        conn.query(sql, function (err, result) {
            if (err) {
                res.json({
                    status: 'f'
                });
                throw err;
            }
            if (result.affectedRows < 1) {
                res.json({
                    status: 'f'
                });
            } else {
                res.json({
                    status: 's'
                });
            }
        });
    };
}