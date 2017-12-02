var mysql = require('mysql');
var config = require('./db_info').real;

module.exports = function () {
    return {
        init: function () {
            return mysql.createConnection({
                host: config.host,
                port: config.port,
                user: config.user,
                password: config.password,
                database: config.database,
                charset: 'utf8'
            })
        },
        open: function (con) {
            con.connect(function (err) {
                if (err) {
                    console.log('[x] MySQL Connection Error : ' + err);
                } else {
                    console.log('[v] MySQL Server Connected.');
                }
            })
        },
        mysql: mysql
    }
}