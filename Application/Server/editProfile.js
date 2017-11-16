var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();
require('date-utils');
var mysql = require('mysql');

app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));

exports.editProfile = function(req, res){
    var conn = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "12341234",
        database : "t_user"
    });
    
    conn.connect(function(err){
        if(err) throw err;
        var id = req.body.id;
        if(req.body.new_pw && req.body.new_Nn && req.body.new_Email){
            var new_pw = req.body.new_pw;
            var new_Nn = req.body.new_Nn;
            var new_Email = req.body.new_Email;
            var sql = "update `user` set password='"+new_pw+"', nickname='"+new_Nn+"', email='"+new_Email+"' WHERE user_id = '"+id+"'";
            conn.query(sql, function(err, result){
                if(err){
                    res.json({status : 'f'});
                    throw err;
                }
                if(result.affectedRows==1)
                    res.json({status : 's'});
                else{
                    res.json({status : 'f'});
                }
            });
        }
    });
};