module.exports = function (conn) {
    return function (req, res) {
        var sess = req.session;
        var sql = "select admin from `user` WHERE id = '" + sess.username + "'";
        conn.query(sql, function (err, result) {
            if (err) {
                res.json({
                    status: 'err'
                });
                throw err;
            } else if (result.affectedRows === 1) {
                if (result[0].admin === 1) {
                    fs.readFile('../Client/notice_write.html', function (error, data) {
                        if (error) {
                            console.log(error);
                        } else {
                            res.writeHead(200, {
                                'Content-Type': 'text/html'
                            });
                            res.end(data);
                        }
                    });
                } else if (result[0].admin === 0) {
                    res.redirect('/');
                }
            }
        });
    }
}