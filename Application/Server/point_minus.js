module.exports = function (conn) {
    return function (req, res) {
        var user_id = req.body.user_id;
        var id = req.body.id;
        var minus_point = req.body.price;
        var sql = "update `user` set point = point - " + minus_point + " WHERE user_id = '" + user_id + "'";
        conn.query(sql, function (err, result) {
            if (err) {
                res.json({
                    status: 'f'
                });
                throw err;
            }
            if (result.changedRows == 0) {
                res.json({
                    status: 'f'
                });
            }
        });
        var sql = "insert into `payed` (id, user_id, price) VALUES('" + id + "', '" + user_id + "', '" + minus_point + "')";
        conn.query(sql, function (err, result) {
            if (err) {
                res.json({
                    status: 'f'
                });
                throw err;
            }
            res.json({
                statis: 's'
            });
        });
    }
}