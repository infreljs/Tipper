$(document).ready(function () {
    $(".checkbox").on("click", function () {
        $(this).toggleClass("active");
    });
});

function checkIDDup() {
    $.ajax({
        url: "/users/check/iddup",
        method: "GET",
        data: {
            id: 'local:' + $("#register-form #id").val()
        },
        dataType: "JSON",
        success: function (data, status, xhr) {
            if (data.dup) {
                $("#register-form #id-check").removeClass("active");
            } else {
                $("#register-form #id-check").addClass("active");
            }
        },
        error: function (xhr, status, err) {
            console.log(err);
        }
    });
}

function checkPW() {
    if ($("#pw").val() != "") {
        $("#pw-check").addClass("active");
    } else {
        $("#pw-check").removeClass("active");
    }
}

function checkPWRetype() {
    if ($("#pw").val() != "" && $("#pw").val() === $("#pw-re").val()) {
        $("#pw-re-check").addClass("active");
    } else {
        $("#pw-re-check").removeClass("active");
    }
}

function register() {
    if ($(".checkbox").length === $(".checkbox.active").length) {
        $("#register-form").submit();
    } else {
        alert('개인정보 수집 이용과 이메일 수신에 모두 동의해주세요!');
    }
}