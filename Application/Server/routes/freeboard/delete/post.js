module.exports = function (conn) {
    return function (req, res) {
        if (req.params.id == undefined) {
            res.json({
                status: 'f'
            });
            return;
        }
        var sql = "SELECT user_id FROM freeboard WHERE id=?";
        conn.query(sql, [req.params.id], function (err, results) {
            if (err) {
                res.json({
                    status: 'f'
                });
                console.log(err);
                return;
            }
            if (results[0].user_id != req.user.id) {
                res.json({
                    status: 'f'
                });
                return;
            }
            sql = "DELETE FROM freeboard WHERE id=?";
            conn.query(sql, [req.params.id], function (err, results) {
                if (err) {
                    res.json({
                        status: 'f'
                    });
                    console.log(err);
                    return;
                }
                res.json({
                    status: 's'
                });
            });
        });
    };
};