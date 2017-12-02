if ($('#dashboard').length) {
    var dashboard_admin = new Vue({
        el: '#dashboard',
        data: {
            userName: username,
            postNums: 100,
            earnedPoints: 10000,
            totalPoints: point,
            recommendNums: 100,
            userGrade: "Silver"
        }
    });
}

if ($('#dashboard-admin').length) {
    var dashboard_admin = new Vue({
        el: '#dashboard-admin',
        data: {
            adminType: "게시글 관리자",
            adminName: username,
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
        }
    });
}

if ($('#my-postlist').length) {
    var my_postlist = new Vue({
        el: '#my-postlist',
        data: {
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
        }
    });
}

if ($('#postlist').length) {
    var postlist = new Vue({
        el: '#postlist',
        data: {
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
        }
    });
}