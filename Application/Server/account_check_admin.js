module.exports = function (conn) {
    return function (req, res) {
        var user_id = req.body.user_id;
        var sql = "select admin from `user` WHERE user_id='" + user_id + "'";
        conn.query(sql, function (err, result) {
            console.log(result[0].admin);
            if (err) {
                res.json({
                    status: 'f'
                });
                throw err;
            }
            if (result[0].admin == 1) {
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