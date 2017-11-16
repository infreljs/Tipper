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
    var res = "";
    var user_id = req.body.user_id;
    var sql = "select * from payed WHERE user_id = '"+user_id+"'";
    conn.query(sql, function(err, results){
        var length = results.length;
        if(err){
            res.json({status : 'f'});
            throw err;
        }
        for(var i=0;i<length;i++){
            res = res+ '{title : '+results[i].title+', price : '+results[i].price+', writer : '+results[i].user_id+'}';
        }
        res = res.substring(0, res.length-1);
        res.json({result : res});
    });
};