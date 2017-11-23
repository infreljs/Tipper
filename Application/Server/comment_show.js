module.exports = function (conn) {
    return function (req, res) {
        var post_id = req.body.post_id;
        var type = req.body.type;
        var result = [];
        if (type === 't') {
            var sql = "select * from `t_comment` WHERE post_id = '" + post_id + "'";
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
                    //result = result+ '{comment : '+results[i].comment+', writer : '+results[i].account_id+', createTime : '+results[i].createTime+'}, ';
                    result.push({
                        comment: results[i].comment,
                        writer: results[i].account_id,
                        createTime: results[i].createTime
                    });
                }
                res.contentType('application/json');
                res.send(JSON.stringify(result));
            });
        } else if (type === 'f') {
            var sql = "select * from `f_comment` WHERE post_id = '" + post_id + "'";
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
                    result.push({
                        comment: results[i].comment,
                        writer: results[i].account_id,
                        createTime: results[i].createTime
                    });
                }
                res.contentType('application/json');
                res.send(JSON.stringify(result));
            });
        }
    }
}