var express = require('express');
var bodyParser = require('body-parser');
var app = express();
require('date-utils');
var mysql = require('mysql');

app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));

exports.point_minus = function(req, res){
    conn = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '12341234',
        database : 'tipper'
    });
    var user_id = req.body.user_id;
    var id = req.body.id;
    var minus_point = req.body.price;
    var sql = "update `user` set point = point - "+minus_point+" WHERE user_id = '" +user_id+"'";
    conn.query(sql, function(err, result){
        if(err){
            res.json({status : 'f'});
            throw err;
        }
        if(result.changedRows == 0){
            res.json({status : 'f'});
        }
    });
    var sql = "insert into `payed` (id, user_id, price) VALUES('"+id+"', '"+user_id+"', '"+minus_point+"')";
    conn.query(sql, function(err, result){
        if(err){
            res.json({status : 'f'});
            throw err;
        }
        res.json({statis : 's'});
    });
}