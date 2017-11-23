module.exports = function (conn) {
    return function (req, res) {
        var type = req.body.type;
        var id = req.body.user_id;
        var add_point;
        if (type == 'w') {
            add_point = 10;
        } else if (type == 's') {
            add_point = req.body.add_point;
        }
        var sql = "UPDATE `user` SET point=point+" + add_point + " WHERE user_id = '" + id + "'";
        console.log(sql);
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
    };
}