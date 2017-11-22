$(document).ready(function () {
    $('.dropdown>button').on('focusin', function () {
        $('.dropdown-content').addClass('show');
    });
    $('.dropdown>button').on('focusout', function () {
        $('.dropdown-content').removeClass('show');
    });
});

window.onscroll = function () {
    document.getElementsByClassName("navbar")[0].style.top = "0";
};

var sidebar_component = {
    template: `
        <div>
            <img src="../img/menu.png" class="close-button" onclick='$("#sidebar").width(0);'>
            <h1 class="header"><a href="/">Tipper</a></h1>
            <hr>
            <a class="font-md list" href="">게시글 작성</a>
            <a class="font-md list" href="">꿀팁 보기</a>
            <a class="font-md list" href="">Tip Top Ten</a>
            <a class="font-md list" href="">금주의 꿀팁</a>
        </div>
    `
};

new Vue({
    el: "#sidebar",
    components: {
        'sidebar': sidebar_component
    }
});

var user_dropdown = new Vue({
    el: '#user-dropdown',
    data: {
        username: "꼬꼬맷",
        point: "100"
    }
});

var tiptoptencards = new Vue({
    el: "#tip-top-ten-cards",
    data: {
        list: [{
                img: "../img/banner.png",
                title: "사막에서 물 찾는 방법"
            },
            {
                img: "../img/banner.png",
                title: "사막에서 물 찾는 방법"
            },
            {
                img: "../img/banner.png",
                title: "사막에서 물 찾는 방법"
            },
            {
                img: "../img/banner.png",
                title: "사막에서 물 찾는 방법"
            },
            {
                img: "../img/banner.png",
                title: "사막에서 물 찾는 방법"
            },
            {
                img: "../img/banner.png",
                title: "사막에서 물 찾는 방법"
            },
            {
                img: "../img/banner.png",
                title: "사막에서 물 찾는 방법"
            },
            {
                img: "../img/banner.png",
                title: "사막에서 물 찾는 방법"
            },
            {
                img: "../img/banner.png",
                title: "사막에서 물 찾는 방법"
            },
            {
                img: "../img/banner.png",
                title: "사막에서 물 찾는 방법"
            }
        ]
    }
});

var weekly_tip = new Vue({
    el: "#weekly-tip",
    data: {
        title: "클래시 로얄",
        list: [{
                img: "../img/banner.png",
                title: "사막에서 물 찾는 방법"
            },
            {
                img: "../img/banner.png",
                title: "사막에서 물 찾는 방법"
            },
            {
                img: "../img/banner.png",
                title: "사막에서 물 찾는 방법"
            },
            {
                img: "../img/banner.png",
                title: "사막에서 물 찾는 방법"
            },
            {
                img: "../img/banner.png",
                title: "사막에서 물 찾는 방법"
            }
        ]
    }
});