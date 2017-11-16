var express = require('express');
var bodyParser = require('body-parser');
var app = express();
require('date-utils');
var mysql = require('mysql');

var newDate = new Date();
var time = newDate.toFormat('YYYY-MM-DD HH24:MI:SS');

app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));

exports.writeTipboard = function(req, res){
    var conn = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "12341234",
        database : "t_board"
    });
    
    conn.connect(function(err){
        if(err) throw err;
        var id = req.body.id;
        var title = req.body.title;
        var contents = req.body.contents;
        var type = req.body.type;
        
        var sql = "INSERT into `board` (author, title, contents, type, date) VALUES ('"+id+"', '"+title+"', '"+contents+"', '"+type+"', '"+time+"')";
        console.log(sql);

        conn.query(sql, function(err, result){
            if(err){
                res.json({status : 'f'});
                throw err;
            }
            res.json({status : 's'});
        });
    });
};