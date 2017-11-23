module.exports = function (conn) {
    return function (req, res) {
        var cr_point;
        var user_id = req.body.user_id;
        var post_id = req.body.post_id;
        var sql = "SELECT point from `user` WHERE id = '" + user_id + "'";
        console.log(sql);
        conn.query(sql, function (err, result) {
            if (err) {
                res.json({
                    status: 'err'
                });
                throw err;
            }
            if (result.changedRows == 0) {
                res.json({
                    status: 'f'
                });
            } else {
                cr_point = result[0].point;

            }
        });
        console.log(cr_point);
        var price;
        var sql = "SELECT price from `post` WHERE id = '" + post_id + "'";
        conn.query(sql, function (err, result) {
            if (err) {
                res.json({
                    status: 'err'
                });
                throw err;
            }
            if (result.changedRows == 0) {
                res.json({
                    status: 'f'
                });
            } else {
                price = result[0].price;
            }
        });
        if (cr_point - price < 0) {
            res.json({
                status: nm
            });
        } else {
            var sql = "update `user` set point = point - (SELECT price from `post` WHERE id = '" + post_id + "') WHERE id = '" + user_id + "'";
            conn.query(sql, function (err, result) {
                if (err) {
                    res.json({
                        status: 'err'
                    });
                    throw err;
                }
                if (result.changedRows == 0) {
                    res.json({
                        status: 'f'
                    });
                }
            });
            var sql = "insert into `payedlist` (post_id, user_id) VALUES('" + post_id + "', '" + user_id + "')";
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
}