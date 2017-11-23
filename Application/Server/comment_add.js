module.exports = function (conn) {
    return function (req, res) {
        var post_id = req.body.post_id;
        var type = req.body.type;
        var comment = req.body.comment;
        var user_id = req.body.user_id;
        var result = "";
        var dt = new Date();
        var d = dt.toFormat('YYYY-MM-DD HH24:MI:SS');
        if (type === 't') {
            var sql = "insert into t_comment (post_id, comment, account_id, createTime) VALUES('" + post_id + "', '" + comment + "', '" + user_id + "', '" + d + "')";
            console.log(sql);
            conn.query(sql, function (err, result) {
                if (err) {
                    res.json({
                        status: 'f'
                    });
                    throw err;
                }
                if (result.affectedRows == 1) {
                    res.json({
                        status: 's'
                    });
                }
            });
        } else if (type === 'f') {
            var sql = "insert into f_comment (post_id, comment, account_id, createTime) VALUES('" + post_id + "', '" + comment + "', '" + user_id + "', '" + d + "')";
            console.log(sql);
            conn.query(sql, function (err, results) {
                var length = results.length;
                if (err) {
                    res.json({
                        status: 'f'
                    });
                    throw err;
                }
                for (var i = 0; i < length; i++) {
                    result = result + '{comment : ' + results[i].comment + ', writer : ' + results[i].account_id + ', createTime : ' + results[i].createTime + '}';
                }
                res.json({
                    results: result
                });
            });
        }
    };
}