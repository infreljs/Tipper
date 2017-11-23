module.exports = function (conn) {
    return function (req, res) {
        var id = req.body.id;
        var type = req.body.type;
        if (type == 'like') {
            var sql = "update `board` set like = like + 1 WHERE id='" + id + "'";
            conn.query(sql, function (err, result) {
                if (err) {
                    res.json({
                        status: 'f'
                    });
                    throw err;
                }
                res.json({
                    status: 's'
                });
            })
        } else if (type == 'unlike') {
            var sql = "update `board` set unlike = unlike + 1 WHERE id='" + id + "'";
            conn.query(sql, function (err, result) {
                if (err) {
                    res.json({
                        status: 'f'
                    });
                    throw err;
                }
                res.json({
                    status: 's'
                });
            })
        }
    };
}