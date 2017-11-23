module.exports = (function () {
    return {
        local: { // localhost
            host: 'localhost',
            port: '3306',
            user: 'root',
            password: '12341234',
            database: 'tipper'
        },
        real: { // real server db info
            host: 'aws.infre.kr',
            port: '3306',
            user: 'tipper',
            password: 'T!pP3R!&*',
            database: 'tipper'
        },
        test: { // test server db info
            host: 'aws.infre.kr',
            port: '3306',
            user: 'tippertest',
            password: 'tippertest',
            database: 'tippertest'
        }
    }
})();