module.exports = function (conn) {
    return function (req, res) {
        var sql = "SELECT (SELECT COUNT(id) FROM tip WHERE user_id=?) AS tipNum, (SELECT COUNT(id) AS postNum FROM freeboard WHERE user_id=?) AS postNum, (SELECT SUM(payedList.price) FROM payedList LEFT JOIN tip ON payedList.tip_id = tip.id WHERE tip.user_id=?) AS earnedPoint, (SELECT point FROM user WHERE id=?) AS point, (SELECT COUNT(tipLike.id) FROM tipLike LEFT JOIN tip ON tipLike.tip_id = tip.id WHERE tip.user_id=?) AS likeNum FROM DUAL";
        conn.query(sql, [req.user.id, req.user.id, req.user.id, req.user.id, req.user.id], function (err, results) {
            if (err) {
                console.log('[x] MySQL Query Error at /mypage : ' + err);
                throw err;
            }
            var tipNum = results[0].tipNum;
            var postNum = results[0].postNum;
            var earnedPoint = results[0].earnedPoint;
            var point = results[0].point;
            var likeNum = results[0].likeNum;

            res.render('mypage', {
                user: {
                    logined: req.isAuthenticated(),
                    admin: req.user.admin,
                    username: req.user.nickname,
                    point: req.user.point
                },
                dashboard: {
                    tipNum: tipNum,
                    postNum: postNum,
                    earnedPoint: (earnedPoint) ? (earnedPoint) : ('0'),
                    point: point,
                    likeNum: likeNum
                },
                post: {
                    list: [{
                        id: '1',
                        title: '타이틀1',
                        price: 100,
                        likeNum: 1000,
                        viewNum: 1000,
                        category: '생활',
                        earnedPoint: 10000
                    }],
                    page: {
                        nowpage: 1,
                        firstpage: ((Math.ceil((1) / 5) - 1) * 5) + 1,
                        maxpage: 1
                    }
                }
            });
        });
    };
};