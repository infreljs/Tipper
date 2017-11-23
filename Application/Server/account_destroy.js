var express = require('express');
var app = express();
var mysql = require('mysql');

app.use(express.static('../Client'));

exports.account_destroy = function(req, res){
    conn = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '12341234',
        database : 'tipper'
    });
    var user_id = req.body.user_id;
    var sql = "delete from `user` WHERE user_id='"+user_id+"'";
    conn.query(sql, function(err, result){
        if(err){
            res.json({status : 'f'});
            throw err;
        }
        if(result.affectedRows<1){
            res.json({status : 'f'});
        }
        else{
            res.json({status : 's'});
        }
    });
};