var port = process.argv[2],
  net = require('net'),
  today = new Date();

function makedate(date) {
  var year,
    month,
    day,
    hours,
    mins,
    answer;
  year = date.getFullYear().toString();
  month = date.getMonth() <= 8 ? "0" + (date.getMonth() + 1).toString() :
      (date.getMonth() + 1).toString();
  day = date.getDate() <= 9 ? "0" + date.getDate().toString() :
      date.getDate().toString();
  hours = date.getHours() <= 9 ? "0" + date.getHours().toString() :
      date.getHours().toString();
  mins = date.getMinutes() <= 9 ? "0" + date.getMinutes().toString() :
      date.getMinutes().toString();
  answer = year + "-" + month + "-" + day + " " + hours + ":" + mins + "\n";
  return answer;
//"YYYY-MM-DD hh:mm"

}


var server = net.createServer(function (socket) {
  var date = makedate(today);
  socket.write(date);
  socket.end();
});
server.listen(port);


/**
 *     var net = require('net')

    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }

    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }

    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })

    server.listen(Number(process.argv[2]))
 */