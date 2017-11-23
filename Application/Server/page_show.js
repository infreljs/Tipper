module.exports = function (fs, page, priv = false) {
    return function (req, res) {
        if (priv) {
            var sql = "select admin from `user` WHERE id = '" + sess.username + "'";
            conn.query(sql, function (err, result) {
                if (err) {
                    res.json({
                        status: 'err'
                    });
                    throw err;
                } else if (result.affectedRows === 1) {
                    fs.readFile('../Client/' + page, function (error, data) {
                        if (error) {
                            console.log(error);
                        } else {
                            res.writeHead(200, {
                                'Content-Type': 'text/html'
                            });
                            res.end(data);
                        }
                    });
                }
            });
        } else {
            fs.readFile('../Client/' + page, function (error, data) {
                if (error) {
                    console.log(error);
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    res.end(data);
                }
            });
        }
    };
};