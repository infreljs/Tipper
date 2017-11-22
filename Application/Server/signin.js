var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
require('date-utils');

exports.signin = function(req, res){
    conn = mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '12341234',
        database : 'tipper'
    });
    var dt = new Date();
    var d = dt.toFormat('YYYY-MM-DD HH24:MI:SS');
    var id = req.body.user_id;
    var pw = req.body.pw;
    var inf_ck = req.body.inf_ck;
    var nickname = req.body.nickname;
    var email = req.body.email;
    var sql = "insert into user (user_id, password, inf_ck, nickname, email, createTime) VALUES('"+id+"', '"+pw+"', '"+inf_ck+"', '"+nickname+"', '"+email+"', '"+d+"')";
    conn.query(sql, function(err, result){
        if(err){
            res.json({status : 'f'});
            throw err;
        }
        else if(result.affectedRows===1){
            res.json({status : 's'});
        }
        else{
            res.json({status : 'f'});
        }
    })
};