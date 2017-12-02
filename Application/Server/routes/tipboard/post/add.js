module.exports = function (conn) {
    return function (req, res) {
        var tip_id = req.body.tip_id;
        var comment = req.body.comment;
        var user_id = req.body.user_id;
        var result = "";
        var dt = new Date();
        var d = dt.toFormat('YYYY-MM-DD HH24:MI:SS');
        var sql = "INSERT INTO tipComment (tip_id, user_id, comment, createTime) VALUES (?, ?, ?, ?)";
        console.log(sql);
        conn.query(sql, [tip_id, user_id, comment, d], function (err, result) {
            if (err || result.affectedRows != 1) {
                res.json({
                    status: 'f'
                });
                throw err;
            } else {
                res.json({
                    status: 's'
                });
            }
        });
    };
};