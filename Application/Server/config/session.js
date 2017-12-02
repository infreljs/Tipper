module.exports = function (MySQLStore) {
    var config = require('../database/db_info').test;
    return {
        secret: 'T1pp3r#!^$@%',
        resave: false,
        saveUninitialized: true,
        store: new MySQLStore({
            host: config.host,
            port: config.port,
            user: config.user,
            password: config.password,
            database: config.database
        })
    };
};