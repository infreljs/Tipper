module.exports = function () {
    return function (req, res) {
        res.render('admin', {
            user: {
                logined: req.isAuthenticated(),
                admin: req.user.admin,
                username: req.user.nickname,
                point: req.user.point
            },
            admin: {
                adminType: "게시글 관리자",
                tipNum: 100,
                fbPostNum: 100
            }
        });
    };
};



var dashboard_admin = {
    userName: 'Comet',
    postNums: 100,
    earnedPoints: 10000,
    totalPoints: 100,
    recommendNums: 100,
    userGrade: "Silver"
};

var dashboard_admin = {
    adminType: "게시글 관리자",
    adminName: 'Comet',
    tipNums: 100,
    fbPostNums: 100,
    postList: [{
        title: "Title",
        price: 100,
        recommends: 100,
        views: 1000,
        category: "생활",
        earnedPoints: 10000
    }]
};

var my_postlist = {
    postList: [{
        onclick: "location.href='?id=" + 1 + "'",
        title: "Title",
        price: 100,
        recommends: 100,
        views: 1000,
        category: "생활",
        earnedPoints: 10000
    }, {
        onclick: "location.href='?id=" + 2 + "'",
        title: "Title",
        price: 100,
        recommends: 100,
        views: 1000,
        category: "생활",
        earnedPoints: 10000
    }, {
        onclick: "location.href='?id=" + 3 + "'",
        title: "Title",
        price: 100,
        recommends: 100,
        views: 1000,
        category: "생활",
        earnedPoints: 10000
    }, {
        onclick: "location.href='?id=" + 4 + "'",
        title: "Title",
        price: 100,
        recommends: 100,
        views: 1000,
        category: "생활",
        earnedPoints: 10000
    }, {
        onclick: "location.href='?id=" + 5 + "'",
        title: "Title",
        price: 100,
        recommends: 100,
        views: 1000,
        category: "생활",
        earnedPoints: 10000
    }],
    pages: [{
        url: "?page=1",
        id: 1
    }, {
        url: "?page=2",
        id: 2
    }, {
        url: "?page=3",
        id: 3
    }, {
        url: "?page=4",
        id: 4
    }]
};

var postlist = {
    postList: [{
        onclick: "location.href='?id=" + 1 + "'",
        title: "Title",
        price: 100,
        recommends: 100,
        views: 1000,
        category: "생활",
        earnedPoints: 10000
    }, {
        onclick: "location.href='?id=" + 2 + "'",
        title: "Title",
        price: 100,
        recommends: 100,
        views: 1000,
        category: "생활",
        earnedPoints: 10000
    }, {
        onclick: "location.href='?id=" + 3 + "'",
        title: "Title",
        price: 100,
        recommends: 100,
        views: 1000,
        category: "생활",
        earnedPoints: 10000
    }, {
        onclick: "location.href='?id=" + 4 + "'",
        title: "Title",
        price: 100,
        recommends: 100,
        views: 1000,
        category: "생활",
        earnedPoints: 10000
    }, {
        onclick: "location.href='?id=" + 5 + "'",
        title: "Title",
        price: 100,
        recommends: 100,
        views: 1000,
        category: "생활",
        earnedPoints: 10000
    }],
    pages: [{
        url: "?page=1",
        id: 1
    }, {
        url: "?page=2",
        id: 2
    }, {
        url: "?page=3",
        id: 3
    }, {
        url: "?page=4",
        id: 4
    }]
};