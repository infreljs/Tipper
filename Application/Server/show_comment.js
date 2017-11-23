var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('mysql');

app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));

exports.comment = function(req, res){
    var conn = mysql.createConnection({
        host : "localhost",
        user : "root",
        password : "12341234",
        database : "tipper"
    });
    var post_id = req.body.post_id;
    var result = [];
    var sql = "select * from `comment` WHERE post_id = '"+post_id+"'";
    console.log(sql);
    conn.query(sql, function(err, results){
        var length = results.length;
        if(!length){
            res.json({status : 'f'});
            throw err;
        }
        if(err){
            res.json({status : 'f'});
            throw err;
        }
        for(var i=0;i<length;i++){
            //result = result+ '{comment : '+results[i].comment+', writer : '+results[i].account_id+', createTime : '+results[i].createTime+'}, ';
            result.push({comment : results[i].comment, writer : results[i].user_id, createTime : results[i].createTime});
        }
        res.contentType('application/json');
        res.send(JSON.stringify(result));
    });
}