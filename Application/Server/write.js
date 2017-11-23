var express = require('express');
var bodyParser = require('body-parser');
var app = express();
require('date-utils');
var mysql = require('mysql');

var newDate = new Date();
var time = newDate.toFormat('YYYY-MM-DD HH24:MI:SS');

app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));

exports.write = function(req, res){
    var conn = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "12341234",
        database : "tipper"
    });
    
    conn.connect(function(err){
        if(err) throw err;
        var id = "asdf";
        var title = req.body.title;
        var contents = req.body.contents;
        var category = req.body.category;
        
        var sql = "INSERT into `post` (user_id, title, contents, category, createTime) VALUES ('"+id+"', '"+title+"', '"+contents+"', '"+category+"', '"+time+"')";
        console.log(sql);

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
        });
    });
};