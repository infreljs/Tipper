var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();
var mysql = require('mysql');

app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));

exports.ck_admin = function(req, res){
    conn = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '12341234',
        database : 't_user'
    });
    var user_id = req.body.user_id;
    var sql = "select admin from `user` WHERE user_id='"+user_id+"'";
    conn.query(sql, function(err, result){
        console.log(result[0].admin);
        if(err){
            res.json({status : 'f'});
            throw err;
        }
        if(result[0].admin==1){
            res.redirect('');
        }
        else{
            res.json({status : 'f'});
        }
    })
};