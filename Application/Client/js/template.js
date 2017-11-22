var username = "";
var point = 0;

$(document).ready(function () {
    $('.dropdown button').on('focusin', function () {
        $('.dropdown-content').addClass('show');
    });
    $('.dropdown button').on('focusout', function () {
        $('.dropdown-content').removeClass('show');
    });
});

var sidebar_component = {
    template: `
        <div>
            <img src="img/menu.png" class="close-button" onclick='$("#sidebar").width(0);'>
            <h1 class="header"><a href="/">Tipper</a></h1>
            <hr>
            <a class="font-md list" href="">게시글 작성</a>
            <a class="font-md list" href="">꿀팁 보기</a>
            <a class="font-md list" href="">Tip Top Ten</a>
            <a class="font-md list" href="">금주의 꿀팁</a>
        </div>
    `
};

var sidebar = new Vue({
    el: "#sidebar",
    components: {
        'sidebar': sidebar_component
    }
});

var navbar_component = {
    template: `
        <div>
            <img src="img/menu.png" class="navbar-brand" href="#" onclick='$("#sidebar").width(250);'>
            <input id="search" class="search-input round-edge input-sm" type="text">
            <div id="user-dropdown" class="dropdown">
                <div>
                    <button v-cloak>{{ username }} 님</button>
                    <div class="dropdown-content">
                        <div class="dropdown-profile">
                            <span class="font-sm">{{ username }} <span class="gray">|</span> {{ point }} p</span>
                        </div>
                        <a href="#">내 포인트</a>
                        <a href="#">내가 쓴 꿀팁</a>
                        <a href="#">프로필 수정</a>
                        <a href="#">로그아웃</a>
                    </div>
                </div>
            </div>
        </div>
    `,
    data: function () {
        return {
            username: username,
            point: point
        }
    }
};

var navbar = new Vue({
    el: '#navbar',
    components: {
        'navbar': navbar_component
    }
});

var footer_component = {
    template: `
        <div>
            <div class="container text-center">
                <img class="footer-logo" src="img/logo.png">
                <p class="font-sm gray copyright">Copyright ⓒ 2017 Team. HackBomb all rights reserved.</p>
            </div>
        </div>
    `
};

var footer = new Vue({
    el: 'footer',
    components: {
        'app-footer': footer_component
    }
});