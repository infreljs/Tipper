module.exports = function (conn) {
    return function (req, res) {
        var dt = new Date();
        var d = dt.toFormat('YYYY-MM-DD HH24:MI:SS');
        var id = req.body.id;
        var pw = req.body.pw;
        var sql = "INSERT INTO `account` (id, pw, point, createTime, used) VALUES('" + id + "', '" + pw + "', '0', now(), '0')";
        conn.query(sql, function (err, result) {
            if (err) {
                res.json({
                    status: 'f'
                });
                throw err;
            } else if (result.affectedRows === 1) {
                res.json({
                    status: 's'
                });
            } else {
                res.json({
                    status: 'f'
                });
            }
        })
    };
}