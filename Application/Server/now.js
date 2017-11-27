module.exports = function () {
    var date = new Date();
    var m = date.getMonth() + 1;
    var d = date.getDate();
    var h = date.getHours();
    var i = date.getMinutes();
    var s = date.getSeconds();
    return date.getFullYear() + '-' + (m > 9 ? m : '0' + m) + '-' + (d > 9 ? d : '0' + d) + ' ' + (h > 9 ? h : '0' + h) + ':' + (i > 9 ? i : '0' + i) + ':' + (s > 9 ? s : '0' + s);
}