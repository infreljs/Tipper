module.exports = function () {
    return function (req, res) {
        res.render('main', {
            user: (req.isAuthenticated()) ? ({
                logined: true,
                admin: req.user.admin,
                username: req.user.nickname,
                point: req.user.point
            }) : ({
                logined: false
            }),
            tiptoptencards: [{
                    img: "img/banner.png",
                    title: "사막에서 물 찾는 방법"
                },
                {
                    img: "img/banner.png",
                    title: "사막에서 물 찾는 방법"
                },
                {
                    img: "img/banner.png",
                    title: "사막에서 물 찾는 방법"
                },
                {
                    img: "img/banner.png",
                    title: "사막에서 물 찾는 방법"
                },
                {
                    img: "img/banner.png",
                    title: "사막에서 물 찾는 방법"
                },
                {
                    img: "img/banner.png",
                    title: "사막에서 물 찾는 방법"
                },
                {
                    img: "img/banner.png",
                    title: "사막에서 물 찾는 방법"
                },
                {
                    img: "img/banner.png",
                    title: "사막에서 물 찾는 방법"
                },
                {
                    img: "img/banner.png",
                    title: "사막에서 물 찾는 방법"
                },
                {
                    img: "img/banner.png",
                    title: "사막에서 물 찾는 방법"
                }
            ],
            weekly_tip: {
                title: "클래시 로얄",
                list: [{
                        img: "img/banner.png",
                        title: "사막에서 물 찾는 방법"
                    },
                    {
                        img: "img/banner.png",
                        title: "사막에서 물 찾는 방법"
                    },
                    {
                        img: "img/banner.png",
                        title: "사막에서 물 찾는 방법"
                    },
                    {
                        img: "img/banner.png",
                        title: "사막에서 물 찾는 방법"
                    },
                    {
                        img: "img/banner.png",
                        title: "사막에서 물 찾는 방법"
                    }
                ]
            }
        });
    };
};