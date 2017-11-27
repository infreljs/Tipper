$(document).ready(function () {
    $('.dropdown button').on('click', function () {
        $('.dropdown-content').addClass('show');
    });
    $('.dropdown button').on('focusout', function () {
        if (!$('.dropdown-content').is(":hover")) {
            $('.dropdown-content').removeClass('show');
        }
    });
    $('.dropdown-content').on('mouseout', function () {
        if (!$('.dropdown-content').is(":hover") && !$('.dropdown button').is(":focus")) {
            $('.dropdown-content').removeClass('show');
        }
    });
});