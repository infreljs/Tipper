module.exports = function (conn) {
    return function (req, res) {
        var sql = "INSERT INTO freeboard (title, contents, user_id, createTime) VALUES (?, ?, ?, NOW())";
        conn.query(sql, [req.body.title, req.body.content, req.user.id], function (err, results) {
            if (err) {
                throw err;
            }
            if (results.affectedRows === 1) {
                res.redirect('/freeboard/post/' + results.insertId);
            } else {
                res.redirect('/error');
            }
        });
    };
};