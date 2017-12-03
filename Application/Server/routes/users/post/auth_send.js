module.exports = function (nodemailer, randomstring, smtpPool, session) {
    return function (req, res) {
        var host = "naver";
        var add = "dmlwlsdk07";
        var smtpTransport = nodemailer.createTransport(smtpPool({
            service: "gmail",
            host: 'localhost',
            port: '465',
            tls: {
                rejectUnauthorize: false
            },
            auth: {
                user: 'tipp3rservice',
                pass: 'wpghksdlsmsaktmxjgozj'
            },
            maxConnections: 5,
            maxMessages: 10
        }));

        var key_num = randomstring.generate({
            length: 20,
            charset: 'alphabetic'
        })
        console.log(key_num);

        var mailOpt = {
            from: 'tipp3rservice@gmail.com',
            to: add + '@' + host + '.com',
            subject: 'Tipper에서 온 인증코드 입니다.',
            html: '<div style="width : 900px; text-align : center; line-height : 200px;"><div style="background-color : black; opacity : 0.7"><h1 style="color : white; vertical-align : middle;">' + key_num + '</h1></div></div>'
        };

        smtpTransport.sendMail(mailOpt, function (err) {
            if (err) {
                console.log(err);
                res.json({
                    status: 'f'
                });
            } else {
                req.session.key = key_num;
            }
            smtpTransport.close();
        });
    };
}