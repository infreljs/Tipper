var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');
require('date-utils');


app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));

exports.add_comment = function(req, res){
    var conn = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "12341234",
        database : "tipper"
    });
    var post_id = req.body.post_id;
    var comment = req.body.comment;
    var user_id = req.body.user_id;
    var result = "";
    var dt = new Date();
    var d = dt.toFormat('YYYY-MM-DD HH24:MI:SS');
    var sql = "insert into comment (post_id, comment, user_id, createTime) VALUES('"+post_id+"', '"+comment+"', '"+user_id+"', '"+d+"')";
    console.log(sql);
    conn.query(sql, function(err, result){
        if(err){
            res.json({status : 'f'});
            throw err;
        }
        if(result.affectedRows==1){
            res.json({status : 's'});
        }
    });
}