module.exports = function (MySQLStore) {
    return {
        secret: 'T1pp3r#!^$@%',
        resave: false,
        saveUninitialized: true,
        store: new MySQLStore({
            host: 'aws.infre.kr',
            port: 3306,
            user: 'tippertest',
            password: 'tippertest',
            database: 'tippertest'
        })
    };
};