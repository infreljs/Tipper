module.exports = function (fs, page) {
    return function (req, res) {
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
    };
};