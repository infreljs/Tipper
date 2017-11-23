function login() {
    var id = $('#id').val();
    var pw = $('#pw').val();

    $.ajax({
        url: "",
        type: "POST",
        data: {
            id: id,
            pw: pw
        },
        dataType: "json",
        success: function (data, status, xhr) {

        },
        error: function (xhr, status, error) {

        }
    });
}

function logout() {
    $.ajax({
        url: "",
        type: "POST",
        data: {
            id: id,
            pw: pw
        },
        dataType: "json",
        success: function (data, status, xhr) {

        },
        error: function (xhr, status, error) {

        }
    });
}

function register() {
    var id = $('#id').val();
    var pw = $('#pw').val();

    $.ajax({
        url: "",
        type: "POST",
        data: {
            id: id,
            pw: pw
        },
        dataType: "json",
        success: function (data, status, xhr) {

        },
        error: function (xhr, status, error) {

        }
    });
}