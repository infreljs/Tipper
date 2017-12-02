module.exports = function (conn) {
    return function (req, res) {
        switch (req.user.admin) {
            case 1:
                adminType = "자유게시판 관리자";
                break;
            case 2:
                adminType = "팁 게시판 관리자";
                break;
            case 3:
                adminType = "유저 관리자";
                break;
            case 0:
            default:
                res.redirect('/');
                return;
        }
        var sql = "SELECT (SELECT COUNT(id) FROM tip) AS tipNum, (SELECT COUNT(id) FROM freeboard) AS postNum FROM DUAL";
        conn.query(sql, function (err, results) {
            res.render('admin', {
                user: {
                    logined: req.isAuthenticated(),
                    admin: req.user.admin,
                    username: req.user.nickname,
                    point: req.user.point
                },
                admin: {
                    adminType: adminType,
                    tipNum: results[0].tipNum,
                    postNum: results[0].postNum
                }
            });
        });
    };
};