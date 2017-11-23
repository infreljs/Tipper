module.exports = function (conn) {
    return function (req, res) {
        if (err) throw err;
        var id = req.body.id;
        var title = req.body.title;
        var contents = req.body.contents;
        var type = req.body.type;

        var sql = "INSERT into `board` (author, title, contents, type, date) VALUES ('" + id + "', '" + title + "', '" + contents + "', '" + type + "', '" + time + "')";
        console.log(sql);

        conn.query(sql, function (err, result) {
            if (err) {
                res.json({
                    status: 'f'
                });
                throw err;
            }
            res.json({
                status: 's'
            });
        });
    };
}