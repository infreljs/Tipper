module.exports = function (conn) {
    return function (req, res) {
        var id = req.query.num;
        console.log(id);
        var sql = "select * from `board` WHERE id='" + id + "'";
        conn.query(sql, function (err, result) {
            if (err) {
                res.json({
                    status: 'f'
                });
                throw err;
            }
            var title = result[0].title;
            var author = result[0].author;
            var contents = result[0].contents;
            var date = result[0].date;
            var type = result[0].type;
            res.json({
                title: title,
                author: author,
                contents: contents,
                date: date,
                type: type
            });
        });
    };
}