var express = require('express');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');
var app = express();
require('date-utils');
var mysql = require('mysql');

app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));

exports.tip_detail = function(req, res){
    var conn = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "12341234",
        database : "t_board"
    });

    var id = req.query.num;
    console.log(id);
    var sql = "select * from `board` WHERE id='"+id+"'";
    conn.query(sql, function(err, result){
        if(err){
            res.json({status : 'f'});
            throw err;
        }
        var title = result[0].title;
        var author = result[0].author;
        var contents = result[0].contents;
        var date = result[0].date;
        var type = result[0].type;
        res.json({title : title, author : author, contents : contents, date : date, type : type});
    });
};