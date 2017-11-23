var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var mysql = require('mysql');
var app = express();

app.use(session({
    secret: 'joodang',
    resave: false,
    saveUninitialized: true
}));
app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));

exports.show_admin_notice = function(req, res){
    var sess = req.session;
    sess.username = "ss";

    conn = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '12341234',
        database : 'tipper'
    });

    var sql = "select admin from `user` WHERE id = '"+sess.username+"'";
    conn.query(sql, function(err, result){
        if(err){
            res.json({status : 'err'});
            throw err;
        }
        else if(relsult.affectedRows===1){
            if(result[0].admin===1){
                fs.readFile('../Client/notice_write.html', function (error, data) {
                    if (error) {
                        console.log(error);
                    }
                    else {
                        res.writeHead(200, { 'Content-Type': 'text/html' });
                        res.end(data);
                    }
                });
            }
            else if(result[0].admin===0){
                res.redirect('/');
            }
        }
    });
}