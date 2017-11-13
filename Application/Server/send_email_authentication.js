var express = require('express');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');
var smtpPool = require('nodemailer-smtp-pool');
var randomstring = require('randomstring');
var app = express();

app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));

exports.send_authentication = function(req, res){
    var smtpTransport = nodemailer.createTransport(smtpPool( {
        service:'Gmail',
        host:'localhost',
        port:'465',
        tls:{
            rejectUnauthorize:false
        },
        auth:{
            user:'dmlwlsdk07',
            pass:'santajen05'
        },
        maxConnections:5,
        maxMessages:10
    }));
    
    var key_num = randomstring.generate({
        length : 20,
        charset : 'alphabetic'
    })

    console.log(key_num);

    var mailOpt={
        from:'dmlwlsdk07@gmail.com',
        to:'cluxebot@gmail.com',
        subject:'Tipper에서 온 인증코드 입니다.',
        html:'<h1 style="color : skyblue">'+key_num+'</h1>'
    };
    
    smtpTransport.sendMail(mailOpt, function(err) {
        if(err) {
            console.log(err);
            res.json({status : 'f'});
        }
        else{
            res.json({key_num : key_num});
        }
        smtpTransport.close();
    });
};