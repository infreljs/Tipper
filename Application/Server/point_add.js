var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();
require('date-utils');
var mysql = require('mysql');

app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));

exports.point_add = function(req, res){
    conn = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '12341234',
        database : 't_user'
    });
    var type = req.body.type;
    var id = req.body.user_id;
    var add_point;
    if(type == 'w'){
        add_point = 10;
    }
    else if(type == 's'){
        add_point = req.body.add_point;
    }
    var sql = "update `user` set point = point + "+add_point+" WHERE user_id = '" +id+"'";
    console.log(sql);
    conn.query(sql, function(err, result){
        if(err){
            res.json({status : 'f'});
            throw err;
        }
        res.json({statis : 's'});
    });
};