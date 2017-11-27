module.exports = function (conn) {
    return function (req, res) {
        var post_id = req.body.post_id;
        var result = [];
        var sql = "SELECT * FROM `comment` WHERE post_id = '" + post_id + "'";
        console.log(sql);
        conn.query(sql, function (err, results) {
            var length = results.length;
            if (!length) {
                res.json({
                    status: 'f'
                });
                throw err;
            }
            if (err) {
                res.json({
                    status: 'f'
                });
                throw err;
            }
            for (var i = 0; i < length; i++) {
                result.push({
                    comment: results[i].comment,
                    writer: results[i].user_id,
                    createTime: results[i].createTime
                });
            }
            res.contentType('application/json');
            res.send(JSON.stringify(result));
        });
    }
}