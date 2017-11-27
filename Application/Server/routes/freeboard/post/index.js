module.exports = function () {
    return function (req, res) {
        res.render('post', {
            user: {
                logined: req.isAuthenticated(),
                admin: req.user.admin,
                username: req.user.nickname,
                point: req.user.point
            },
            post: {
                title: '타이틀1',
                date: '2017. 11. 11.',
                content: `가나다라
            마바사`,
                likeNum: 100,
                viewNum: 200,
                comment: [

                ],
                author: {
                    username: 'Comet',
                    intro: "Hello!"
                }
            }
        });
    };
};