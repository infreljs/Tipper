var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var hasher = require('pbkdf2-password')();

module.exports = function (passport, conn) {
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    passport.deserializeUser(function (id, done) {
        var sql = 'SELECT * FROM user WHERE id=?';
        conn.query(sql, [id], function (err, results) {
            if (err) {
                done(null, false);
            } else {
                done(null, results[0]);
            }
        });
    });
    passport.use(new LocalStrategy({
            usernameField: 'id',
            passwordField: 'pw',
            passReqToCallback: true
        },
        function (req, username, password, done) {
            var sql = 'SELECT * FROM user WHERE id=?';
            conn.query(sql, ['local:' + username], function (err, results) {
                if (err || results.length == 0) {
                    return done(null, false, {
                        message: '로그인에 실패했습니다! 다시 시도하세요.'
                    });
                }
                var user = results[0];
                return hasher({
                    password: password,
                    salt: user.salt
                }, function (err, pass, salt, hash) {
                    if (hash === user.pw) {
                        console.log('Login Success : ' + user.id);
                        done(null, user);
                    } else {
                        console.log('Wrong Password : ' + user.id);
                        return done(null, false, {
                            message: '로그인에 실패했습니다! 다시 시도하세요.'
                        });
                    }
                })
            })
        }
    ));
    passport.use(new FacebookStrategy({
            clientID: "561017494233920",
            clientSecret: "0735bd5a2a21d9c053ce54829c6de312",
            callbackURL: "/users/login/facebook/callback",
            profileFields: ['id', 'email', 'gender', 'link', 'locale', 'name', 'timezone', 'updated_time', 'verified', 'displayName']
        },
        function (accessToken, refreshToken, profile, done) {
            console.log(profile);
            var id = 'facebook:' + profile.id;
            var sql = 'SELECT * FROM user WHERE id=?';
            conn.query(sql, [id], function (err, results) {
                if (results.length > 0) {
                    done(null, results[0]);
                } else {
                    var user = {
                        id: 'facebook:' + profile.id,
                        nickname: profile.displayName,
                        email: profile.emails[0].value,
                        createTime: require('./now')()
                    };
                    var sql = 'INSERT INTO user SET ?';
                    conn.query(sql, user, function (err, results) {
                        if (err) {
                            console.log(err);
                            done('Facebook Login Error ' + profile.id);
                        } else {
                            done(null, user);
                        }
                    });
                }
            });
        }
    ));
}