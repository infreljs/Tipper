module.exports = function (conn) {
    return function (req, res, next) {
        var sql = "SELECT admin FROM `user` WHERE id=?";
        conn.query(sql, [req.user.id], function (err, results) {
            if (err) {
                console.log(err);
                throw err;
                res.redirect('/users/login');
            } else if (results.affectedRows === 1) {
                return next();
            } else {
                res.redirect('/users/login');
            }
        });
    }
};