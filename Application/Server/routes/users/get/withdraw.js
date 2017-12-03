module.exports = function (conn) {
    return function (req, res) {
        var sql = "DELETE FROM `user` WHERE id=?";
        conn.query(sql, [req.user.id], function (err, result) {
            if (err) {
                throw err;
            }
            if (result.affectedRows) {
                req.logout();
                req.session.save(function () {
                    res.redirect('/');
                });
            }
        });
    };
}