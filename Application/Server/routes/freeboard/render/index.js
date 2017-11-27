module.exports = function () {
    return function (req, res) {
        res.render('freeboard', {
            user: {
                logined: req.isAuthenticated(),
                admin: req.user.admin,
                username: req.user.nickname,
                point: req.user.point
            },
            freeboard: {
                list: [{
                    id: 1,
                    title: "타이틀1",
                    likeNum: 100,
                    viewNum: 200,
                    author: "Comet",
                    commentNum: 10
                }, {
                    id: 2,
                    title: "타이틀2",
                    likeNum: 200,
                    viewNum: 300,
                    author: "Comet",
                    commentNum: 100
                }],
                page: {
                    nowpage: 1,
                    firstpage: ((Math.ceil(1 / 5) - 1) * 5) + 1,
                    maxpage: 1
                }
            }
        });
    };
};