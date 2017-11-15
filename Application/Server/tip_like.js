var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();
require('date-utils');
var mysql = require('mysql');

app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));

exports.tip_like = function(req, res){
    conn = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '12341234',
        database : 't_board'
    })

    var id = req.body.id;
    var type = req.body.type;
    if(type =='like'){
        var sql = "update `board` set like = like + 1 WHERE id='"+id+"'";
        conn.query(sql, function(err, result){
            if(err){
                res.json({status : 'f'});
                throw err;
            }
            res.json({status : 's'});
        })
    }
    else if(type =='unlike'){
        var sql = "update `board` set unlike = unlike + 1 WHERE id='"+id+"'";
        conn.query(sql, function(err, result){
            if(err){
                res.json({status : 'f'});
                throw err;
            }
            res.json({status : 's'});
        })
    }
};