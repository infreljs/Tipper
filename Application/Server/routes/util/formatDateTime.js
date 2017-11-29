module.exports = function (date) {
    var year = date.getFullYear();
    var month = '' + (date.getMonth() + 1);
    var day = '' + date.getDate();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    var a;
    var hour = date.getHours();
    var minute = '' + date.getMinutes();
    var second = '' + date.getSeconds();
    if (hour < 12) {
        a = '오전';
        if (hour == 0) {
            hour = 12;
        }
        if (hour < 10) {
            hour = '0' + hour;
        }
    } else {
        a = '오후';
        if (hour > 12) {
            hour -= 12;
        }
        if (hour < 10) {
            hour = '0' + hour;
        }
    }
    if (minute.length < 2) minute = '0' + minute;
    if (second.length < 2) second = '0' + second;
    return [year, month, day].join('-') + ' ' + a + ' ' + [hour, minute, second].join(':');
}