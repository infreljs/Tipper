module.exports = function (conn) {
    return function (req, res) {
        var id = req.body.id;
        if (req.body.new_pw && req.body.new_Nn && req.body.new_Email) {
            var new_pw = req.body.new_pw;
            var new_Nn = req.body.new_Nn;
            var new_Email = req.body.new_Email;
            var sql = "UPDATE `user` SET pw='" + new_pw + "', nickname='" + new_Nn + "', email='" + new_Email + "' WHERE id = '" + id + "'";
            conn.query(sql, function (err, result) {
                if (err) {
                    res.json({
                        status: 'f'
                    });
                    throw err;
                }
                if (result.affectedRows == 1)
                    res.json({
                        status: 's'
                    });
                else {
                    res.json({
                        status: 'f'
                    });
                }
            });
        }
    };
}