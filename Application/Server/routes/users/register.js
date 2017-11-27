module.exports = function (conn, hasher) {
    return function (req, res) {
        hasher({
            password: req.body.pw
        }, function (err, pass, salt, hash) {
            var user = {
                id: 'local:' + req.body.id,
                pw: hash,
                nickname: req.body.nickname,
                salt: salt,
                email: req.body.email + "@" + req.body.email_suffix,
                createTime: require('../util/now')()
            };
            var sql = "INSERT INTO `user` SET ?";
            conn.query(sql, user, function (err, result) {
                if (err) {
                    res.redirect('/error');
                    throw err;
                } else if (result.affectedRows === 1) {
                    req.login(user, function (err) {
                        req.session.save(function () {
                            res.redirect('/');
                        });
                    });
                } else {
                    res.redirect('/error');
                }
            });
        });
    };
};