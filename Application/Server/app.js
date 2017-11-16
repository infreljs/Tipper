var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var write_tipboard = require('./write_tipboard');
var editProfile = require('./editProfile');
var send_authentication = require('./send_email_authentication');
var tip_detail = require('./tip_deatil');
var payed_tips = require('./payed_tips');
var point_add = require('./point_add');
var tip_like = require('./tip_like');
var point_minus = require('./point_minus');
var account_destroy = require('./account_destroy');
var ck_admin = require('./ck_admin');
var payed_tips = require('./payed_tips');
var index = require('./show_index');
var fs = require('fs');

app.use(express.static('../Client'));
app.use(bodyParser.urlencoded({ extended : false}));
app.listen(3333, function(){
    console.log('connected!');
});
app.post('/tipboard/write', write_tipboard.writeTipboard);
app.post('/users/editProfile', editProfile.editProfile);
app.post('/users/send_authentication', send_authentication.send_authentication);
app.get('/tipboard/detail', tip_detail.tip_detail);
app.post('/users/point_add', point_add.point_add);
app.post('/board/tip_like', tip_like.tip_like);
app.post('/users/point_minus', point_minus.point_minus);
app.post('/users/account_destroy', account_destroy.account_destroy);
app.post('/users/ck_admin', ck_admin.ck_admin);
app.post('/users/payed_tips', payed_tips.payed_tips);
app.get('/', function (req, res) {
    fs.readFile('../Client/board.html', function (error, data) {
        if (error) {
            console.log(error);
        }
        else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});