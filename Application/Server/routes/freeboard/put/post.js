module.exports = function (conn) {
    return function (req, res) {
        console.log(req.params.id);
        console.log(req.body.content);
        var sql = "UPDATE freeboard SET title=?, contents=?, createTime=NOW() WHERE id=?";
        conn.query(sql, [req.body.title, req.body.content, req.params.id], function (err, results) {
            if (err) {
                res.json({
                    status: 'f'
                });
                console.log(err);
                return;
            }
            res.json({
                status: 's'
            });
        });
    };
};