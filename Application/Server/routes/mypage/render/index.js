module.exports = function () {
    return function (req, res) {
        res.render('mypage', {
            user: {
                logined: req.isAuthenticated(),
                admin: req.user.admin,
                username: req.user.nickname,
                point: req.user.point
            },
            dashboard: {
                postNum: 300,
                earnedPoint: 10000,
                point: 100,
                likeNum: 200,
                userGrade: "Silver"
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
    };
};