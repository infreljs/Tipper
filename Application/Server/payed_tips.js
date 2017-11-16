var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');

app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));

exports.payed_tips = function(req , res){
    conn = mysql.createConnection({
        host : 'localhost',
        user : 'root', 
        password : '12341234',
        database : 'tipper'
    });
    var result = "";
    var user_id = req.body.user_id;
    var sql = "select * from payed WHERE user_id = '"+user_id+"'";
    conn.query(sql, function(err, results){
        var length = results.length;
        if(err){
            res.json({status : 'f'});
            throw err;
        }
        for(var i=0;i<length;i++){
            result = result+ '{title : '+results[i].title+', price : '+results[i].price+', writer : '+results[i].user_id+'}';
        }
        result = result.substring(0, result.length);
        res.json({results : result});
    });
};