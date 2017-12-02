function commentAdd(post_id) {
    $.ajax({
        url: "/freeboard/comment",
        method: "POST",
        data: {
            post_id: post_id,
            comment: $('#comment').val()
        },
        dataType: "JSON",
        success: function (data, status, xhr) {
            if (data.status == "s") {
                commentRefresh(post_id);
                $('#comment').val('');
            } else {
                console.log("서버 오류 발생!");
            }
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}

function commentDelete(post_id, comment_id) {
    $.ajax({
        url: "/freeboard/comment",
        method: "DELETE",
        data: {
            comment_id: comment_id,
            comment: $('#comment').val()
        },
        dataType: "JSON",
        success: function (data, status, xhr) {
            if (data.status == "s") {
                commentRefresh(post_id);
                $('#comment').val('');
            } else {
                console.log("서버 오류 발생!");
            }
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}

function commentEdit(post_id, comment_id) {
    $.ajax({
        url: "/freeboard/comment",
        method: "PUT",
        data: {
            comment_id: comment_id,
            comment: $('#comment').val()
        },
        dataType: "JSON",
        success: function (data, status, xhr) {
            if (data.status == "s") {
                commentRefresh(post_id);
                $('#comment').val('');
            } else {
                console.log("서버 오류 발생!");
            }
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}

function commentRefresh(post_id) {
    $.ajax({
        url: "/freeboard/comment",
        method: "GET",
        data: {
            post_id: post_id
        },
        dataType: "TEXT",
        success: function (data, status, xhr) {
            $('#comments').html(data);
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}

function like(post_id) {
    $.ajax({
        url: "/freeboard/like",
        method: "POST",
        data: {
            post_id: post_id
        },
        dataType: "JSON",
        success: function (data, status, xhr) {
            if (data.status == 's') {
                likeRefresh(post_id);
                if (data.liked) {
                    $('#like-icon').addClass('liked');
                } else {
                    $('#like-icon').removeClass('liked');
                }
            } else {
                console.log('서버 오류 발생!');
            }
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}

function likeRefresh(post_id) {
    $.ajax({
        url: "/freeboard/like",
        method: "GET",
        data: {
            post_id: post_id
        },
        dataType: "TEXT",
        success: function (data, status, xhr) {
            $('#like-num').text(data);
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}

function postDelete(post_id) {
    $.ajax({
        url: "/freeboard/post/" + post_id,
        method: "DELETE",
        dataType: "JSON",
        success: function (data, status, xhr) {
            if (data.status == "s") {
                location.href = "/freeboard";
            } else {
                console.log("서버 오류 발생!");
            }
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}

function postEdit(post_id) {
    $.ajax({
        url: "/freeboard/post/" + post_id,
        method: "PUT",
        data: {
            title: $('#edit-title').val(),
            content: CKEDITOR.instances["edit-content"].getData()
        },
        dataType: "JSON",
        success: function (data, status, xhr) {
            if (data.status == "s") {
                location.href = "/freeboard/post/" + post_id;
            } else {
                console.log("서버 오류 발생!");
            }
        },
        error: function (xhr, status, error) {
            console.log(error);
        }
    });
}