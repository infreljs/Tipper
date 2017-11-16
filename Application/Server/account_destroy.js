var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');

app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));

exports.account_destroy = function(req, res){
    conn = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '12341234',
        database : 't_user'
    });
    var user_id = req.body.user_id;
    var sql = "delete from `user` WHERE user_id='"+user_id+"'";
};