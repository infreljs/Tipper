module.exports = function (conn) {
    return function (req, res) {
        var sql = "UPDATE freeboard SET title=?, contents=?, createTime=NOW() WHERE id=?";
        conn.query(sql, [req.body.title, req.body.content, req.body.post_id], function (err, results) {
            if (err) {
                throw err;
            }
            if (results.affectedRows === 1) {
                res.redirect('/freeboard/post/' + req.body.post_id);
            } else {
                res.redirect('/error');
            }
        });
    };
};