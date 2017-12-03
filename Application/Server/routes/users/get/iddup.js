module.exports = function (conn) {
    return function (req, res) {
        if (req.query.id == 'local:') {
            res.json({
                dup: true
            });
            return;
        }
        var sql = "SELECT * FROM user WHERE id=?";
        conn.query(sql, [req.query.id], function (err, results) {
            if (err) {
                console.log(err);
                throw err;
            }

            if (results.length > 0) {
                res.json({
                    dup: true
                });
            } else {
                res.json({
                    dup: false
                })
            }
        });
    }
}