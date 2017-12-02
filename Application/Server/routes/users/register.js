module.exports = function (conn, hasher) {
    return function (req, res) {
        if ((req.body.id == '') || (req.body.pw == '') || (req.body.nickname == '') || (req.body.email == '')) {
            req.flash('error', '빈칸을 모두 입력하세요!');
            res.redirect('/users/register');
            return;
        }
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
            conn.query(sql, user, function (err, results) {
                if (err) {
                    res.redirect('/error');
                    throw err;
                } else if (results.affectedRows === 1) {
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